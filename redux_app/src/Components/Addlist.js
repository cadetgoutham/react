import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {addTaskToList} from '../Slices/ReduxSlice'

function Addlist() {
  const [task, SetName] = useState("")
  const [Desc, SetDesc] = useState("")
  const dispatch = useDispatch()
  const AddTask = (e) =>{
    e.preventDefault();
    dispatch(addTaskToList({task, Desc}))
    SetName("")
    SetDesc("")
  }
  return (
    <div>
      <Container>
      <Form onSubmit={(e) => {AddTask(e)}}>
      <Form.Group className="mb-3">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Name" value={task} onChange={(e) => {
          SetName(e.target.value)
        }}/>  
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Description" value={Desc} onChange={(e) => {
          SetDesc(e.target.value)
        }}/>
      </Form.Group>
      <div className='text-end'>
        <Button variant="primary" type="submit" >
          Add Task
        </Button>
      </div>
    </Form>
    </Container>
    </div>
  )
}

export default Addlist
