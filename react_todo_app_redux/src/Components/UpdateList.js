import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskInList } from '../Slices/ReduxSlice';

function UpdateList(props) {
    const { UpdateTask } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    
    const [task, SetName] = useState("");
    const [Desc, SetDesc] = useState("");
    const [id, SetId] = useState(0);

    // Sync local state when the selected task in Redux changes
    useEffect(() => {
        if (UpdateTask && Object.keys(UpdateTask).length !== 0) {
            SetName(UpdateTask.task || "");
            SetDesc(UpdateTask.Desc || "");
            SetId(UpdateTask.id);
        }
    }, [UpdateTask]);

    const handleUpdate = () => {
        if (task.trim() === "") return alert("Task name cannot be empty");
        dispatch(updateTaskInList({ id, task, Desc }));
        props.onHide();
    };

    return (
        <Modal 
            {...props} 
            centered 
            contentClassName="bg-dark text-white border-secondary"
        >
            <Modal.Header closeButton closeVariant="white" className="border-secondary">
                <Modal.Title className="fs-5 fw-bold">Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-4">
                <Form>
                    <Form.Group className="mb-4">
                        <Form.Label className="text-secondary small fw-bold">TASK NAME</Form.Label>
                        <Form.Control 
                            type="text" 
                            className="bg-secondary text-white border-0"
                            style={{ background: '#2c2c2c !important' }}
                            value={task} 
                            onChange={(e) => SetName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-0">
                        <Form.Label className="text-secondary small fw-bold">DESCRIPTION</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            className="bg-secondary text-white border-0"
                            style={{ background: '#2c2c2c !important' }}
                            value={Desc} 
                            onChange={(e) => SetDesc(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-secondary">
                <Button variant="outline-secondary" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="dark outline-secondary" className="px-4" onClick={handleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateList;