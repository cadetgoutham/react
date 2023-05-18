import React, {useState } from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {ACTIONS} from './App'

export default function Todo({dispatch}) {
    const [name, Setname] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "") return;
        dispatch({
          type : ACTIONS.ADD_LIST,
          payload : {
            task : name
          }
        })
        Setname("")
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control 
            type="text"
            value={name} 
            placeholder="Enter Todo" 
            onChange={(e) => (Setname(e.target.value))}
        />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  )
}
