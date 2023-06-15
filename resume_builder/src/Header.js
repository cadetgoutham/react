import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30, margin: "0 auto" }} id='Header'>
        <h4 style={{textAlign: "center"}}>Resume Builder</h4>
        <Link to="/" ><button className='btn btn-success me-4'>Personal details</button></Link>
        <Link to="/education" ><button className='btn btn-success me-4'>Education</button></Link>
        <Link to="/experience" ><button className='btn btn-success me-4'>Experience</button></Link>
        <Link to="/skill" ><button className='btn btn-success me-4'>Skill</button></Link>
        <Link to="/View" ><button className='btn btn-success me-4'>View</button></Link>
    </div>
  )
}
