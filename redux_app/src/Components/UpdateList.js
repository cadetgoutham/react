import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskInList } from '../Slices/ReduxSlice';

function UpdateList(props) {
    const {UpdateTask} = useSelector((state) => state.tasks)
    const dispatch = useDispatch();
    const [task, SetName] = useState("");
    const [Desc, SetDesc] = useState("");
    const [id, SetId] = useState(0);
    const updateTask = () => {
        props.onHide();
        dispatch(updateTaskInList({id,task,Desc}))
      };
    
      useEffect(() => {
        if (Object.keys(UpdateTask).length !== 0) {
          SetName(UpdateTask.task);
          SetDesc(UpdateTask.Desc);
          SetId(UpdateTask.id);
        }
      }, [UpdateTask]);
  return (
    <>
        <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
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
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
            Update List
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateList