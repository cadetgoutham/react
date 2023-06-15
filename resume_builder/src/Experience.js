import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {AddExperience} from './Slice/ReduxSlicer'

export default function Experiences() {
    const [Experience, setExperience] = useState([])
    const dispatch = useDispatch()
    
    const handleexperience = (index, event) => {
        let data = [...Experience];
        data[index][event.target.name] = event.target.value;
        setExperience(data);
    }
    const addExpFields = () => {
        if(Experience.length < 3){
            let newfield = { CompanyName: '', Year: '', designation:''}
            setExperience([...Experience, newfield])
        }
        else{
            alert("maximum 3 experience is allowed")
            return 0;
        }
        
        
    }
    const removeExp = (index) => {
        let data = [...Experience];
        data.splice(index, 1)
        setExperience(data)
    }
    const Handlesubmit = () => {
        dispatch(AddExperience(Experience))
    }
  return (
    <div style={{ display: 'block', width: 700, margin: "0 auto"}}>
        <h6>Experience</h6>
        {Experience.map((input, index) => {
            return (
                <div key={index}>
                    <Form.Group>
                        <Form.Label>Company Name:</Form.Label>
                        <Form.Control
                            name='CompanyName'
                            type="text" 
                            placeholder="Enter Your Address"
                            onChange={event => handleexperience(index, event)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Year:</Form.Label>
                        <Form.Control 
                            type="text" 
                            name='Year'
                            placeholder="Enter Your Address" 
                            onChange={event => handleexperience(index, event)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Designation:</Form.Label>
                        <Form.Control 
                            type="text"
                            name='designation'
                            placeholder="Enter Your Address" 
                            onChange={event => handleexperience(index, event)}
                        />
                    </Form.Group>
                    <input type='button' value={"Remove"} onClick={() => removeExp(index)}/>
                    <br/>
                </div>
        
        )})}<br/>
        <input type='button' value={"click to Add"} onClick={addExpFields}/><br/><br/>
        <button className='btn btn-primary' onClick={Handlesubmit}>Save</button>
    </div>
  )
}
