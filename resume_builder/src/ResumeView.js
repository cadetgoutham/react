import React from 'react'
import Form from 'react-bootstrap/Form';
import { useSelector} from 'react-redux';

export default function ResumeView() {
    const {myList} = useSelector((state) => state.Details)
    const {personalDetails, ExperienceDetails, EducationDetail, SkillDetails} = myList
    console.log(ExperienceDetails)
    console.log(EducationDetail)
    
  return (
    <div style={{ display: 'block', width: 700, padding: 30,margin: "0 auto" }}>
        <h1 style={{textAlign: "center"}}>Resume View</h1>
        <Form>
        <div>
          <h6>Personal Details</h6>
          { personalDetails.map((data, index) =>{
            return (
                <div key={index}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" name='Name' value={data.Name} readOnly/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Enter your your email address" name='Email' value={data.email} readOnly/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Address" name='Address' value={data.addr} readOnly/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Address" name='Phone' value={data.phone} readOnly/>
          </Form.Group>
                </div>)
          })}
        </div><br/>
        <div>
            <h6>Experience</h6>
            <div id='experiance'>
            { ExperienceDetails.map((data, index) =>{
            return (
                <div key={index}>
            <Form.Group>
                <Form.Label>Company Name:</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter Your Address"
                    value={data.CompanyName} readOnly
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Year:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Your Address" 
                    value={data.Year} readOnly
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Designation:</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter Your Address"
                    value={data.designation} readOnly
                />
            </Form.Group>
            </div>)
          })}
          </div>
        </div>
        <div>
            <h6>Education</h6>
            <div id='experiance'>
            { EducationDetail.map((data, index) =>{
            return (
                <div key={index}>
            <Form.Group>
                <Form.Label>Institute Name:</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter Your Address"
                    value={data.CollegeName} readOnly
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Passed out Year:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Your Address" 
                    value={data.PassedYear} readOnly
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Degree:</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter Your Address" 
                    value={data.Degree} readOnly
                />
            </Form.Group>
            </div>)
          })}
          </div><br/>
        </div>
        <div>
            <h6>Skills</h6>
            <div id='Skills'>
        {SkillDetails.map(name => (  
          <li>  
            {name}  
          </li>  
        ))} </div> </div>
      </Form>
    </div>
  )
}
