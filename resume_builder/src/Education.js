import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {AddEducation} from './Slice/ReduxSlicer'

export default function Educations() {
    const dispatch = useDispatch()
    const [Education, setEducation] = useState([]);

    const handleEducation = (index, event) => {
        let data = [...Education];
        data[index][event.target.name] = event.target.value;
        setEducation(data);
    }
    const addEduFields = () => {
        if(Education.length < 3){
            let newfield = { CollegeName: '', PassedYear: '', Degree:''}
            setEducation([...Education, newfield])
        }else{
            alert("maximum 3 Education is allowed")
            return 0;
        }
    }
    const removeEdu = (index) => {
        let data = [...Education];
        data.splice(index, 1)
        setEducation(data)
    }
    const Handlesubmit = () => {
        dispatch(AddEducation(Education))
    }
  return (
    <div style={{ display: 'block', width: 700, margin: "0 auto"}}>
        <h6>Education</h6>
        {Education.map((input, index) => {
            return (
                <div key={index}>
                <Form.Group>
                    <Form.Label>Institute Name:</Form.Label>
                    <Form.Control
                    name='CollegeName'
                    type="text" 
                    placeholder="Enter Your Address"
                    onChange={event => handleEducation(index, event)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passed out Year:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name='PassedYear'
                    placeholder="Enter Your Address" 
                    onChange={event => handleEducation(index, event)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Degree:</Form.Label>
                    <Form.Control 
                    type="text"
                    name='Degree' 
                    placeholder="Enter Your Address" 
                    onChange={event => handleEducation(index, event)}
                    />
                </Form.Group><br/>
                <input type='button' value={"Remove"} onClick={() => removeEdu(index)}/>
            </div>    
            )})}<br/>
        <input type='button' value={"click to Add"} onClick={addEduFields}/><br/><br/>
        <button className='btn btn-primary' onClick={Handlesubmit}>Save</button>
    </div>
  )
}
