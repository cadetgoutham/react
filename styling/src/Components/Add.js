import React from 'react'
import { AddDetails } from '../Slicer/SlicerReducer'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function Add() {
  const dispatch = useDispatch()
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  const [name, setName] = useState(() => {
    return "";
  })
  const [age, setAge] = useState(() => {
    return "";
  })
  const Handlesubmit = (e) =>{
    e.preventDefault();
    dispatch(AddDetails({name, age}))
    setName("")
    setAge("")
    initModal()
  } 
  return (
    <>
      <div className='Add-btn'>
        <Button variant="success" onClick={initModal} >
        Open Modal
      </Button>
      </div>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>  
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" value={age} onChange={e => setAge(e.target.value)}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={Handlesubmit}>
            Add
          </Button>
          <Button variant="dark" onClick={initModal}>
            cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


