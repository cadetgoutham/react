import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {addPersonal} from './Slice/ReduxSlicer'
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const [Name, setname] = useState("")
  const [email, setemail] = useState("")
  const [addr, setaddr] = useState("")
  const [phone, setphone] = useState("")
  const handlesubmit = (event) => {
    // const D = {}
    dispatch(addPersonal({Name, email, addr, phone}))
    // const onlyInputs = document.querySelectorAll('#BookPackageForm input');
    // onlyInputs.forEach(input => {
    //   if(input.type !== "button"){
    //     D[input.name] = input.value
    //   }
    // });
    // dispatch(addTaskToList(D))
    event.preventDefault()
  }
  return (
    <>
   <div style={{ display: 'block', width: 700, margin: "0 auto"}}>
      
      <Form id='BookPackageForm' onSubmit={event => handlesubmit(event)}>
        <div >
          <h6>Personal Details</h6>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" name='Name' onChange={event => setname(event.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your your email address" name='Email' onChange={event => setemail(event.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Address" name='Address' onChange={event => setaddr(event.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="tel" placeholder="Enter Your Address" name='Phone' onChange={event => setphone(event.target.value)}/>
          </Form.Group>
        </div><br/>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form><br/>
    </div>
    </>
  );
}

export default App;
