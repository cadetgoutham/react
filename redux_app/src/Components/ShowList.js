import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "react-bootstrap";
import { removeTaskFromList, setSelectedTask } from '../Slices/ReduxSlice';
import UpdateList from './UpdateList';

function ShowList() {
    const {myList} = useSelector((state) => state.tasks)
    const dispatch = useDispatch();
    const [modalShow,setModalShow] = useState(false)
    const deleteTask = (task) => {
       dispatch(removeTaskFromList(task))
    }
    const updateTask = (task) => {
      setModalShow(true)
      dispatch(setSelectedTask(task))
  };
  return (
    <>
    <Table striped bordered hover style={{textAlign:'center'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { myList && myList.map((task, index) => {
           return (<tr key={task.id}>
            <td>{index+1}</td>
            <td>{task.task}</td>
            <td>{task.Desc}</td>
            <td>
            <Button variant="primary"className="mx-3" onClick={() => {updateTask(task)}}>Update</Button>
            <Button variant="primary" onClick={() => {deleteTask(task)}}>Delete</Button>
            </td>
            </tr>)
                     
            })
        }
      </tbody>
    </Table>
        <UpdateList show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default ShowList
