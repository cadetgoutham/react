import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';
// import "bootstrap-icons/font/bootstrap-icons.css";  


function Header() {
  const {myList} = useSelector(state => state.tasks)
  return (
    <div>
        <h1 className="text-center my-4 text-primary">Project Management</h1>
        <p className="text-center lead">{`Currently ${myList.length} task(s) pending`}</p>
    </div>
  )
}

export default Header
