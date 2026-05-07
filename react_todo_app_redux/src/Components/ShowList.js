import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeTaskFromList, setSelectedTask } from '../Slices/ReduxSlice';
import UpdateList from './UpdateList';

function ShowList() {
    const { myList } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    
    const [modalShow, setModalShow] = useState(false);
    
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);

    const confirmDelete = (task) => {
        setTaskToDelete(task);
        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        dispatch(removeTaskFromList(taskToDelete));
        setShowDeleteModal(false);
        setTaskToDelete(null);
    };

    const updateTask = (task) => {
        dispatch(setSelectedTask(task));
        setModalShow(true);
    };

    if (myList.length === 0) {
        return (
            <div className="text-center p-5 border rounded" style={{ borderColor: '#333', background: '#1e1e1e' }}>
                <p className="text-secondary mb-0">No tasks found. Add a task to get started!</p>
            </div>
        );
    }

    return (
        <div className="mt-4 shadow-lg rounded overflow-hidden" style={{ background: '#1e1e1e' }}>
            <Table responsive hover className="mb-0">
                <thead style={{ background: '#2c2c2c' }}>
                    <tr>
                        <th className="border-0 text-secondary ps-4">#</th>
                        <th className="border-0 text-secondary">TASK</th>
                        <th className="border-0 text-secondary">DESCRIPTION</th>
                        <th className="border-0 text-secondary text-center">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {myList.map((task, index) => (
                        <tr key={task.id} className="align-middle border-bottom border-dark">
                            <td className="ps-4 text-secondary">{index + 1}</td>
                            <td className="fw-bold text-white">{task.task}</td>
                            <td className="text-secondary small">{task.Desc}</td>
                            <td className="text-center">
                                <div className="d-flex justify-content-center gap-2">
                                    <Button variant="outline-light" size="sm" onClick={() => updateTask(task)}>Edit</Button>
                                    <Button variant="danger" size="sm" onClick={() => confirmDelete(task)}>Delete</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <UpdateList show={modalShow} onHide={() => setModalShow(false)} />

            <Modal 
                show={showDeleteModal} 
                onHide={() => setShowDeleteModal(false)} 
                centered
                contentClassName="bg-dark text-white border-secondary"
            >
                <Modal.Header closeButton closeVariant="white" className="border-0 pb-0">
                    <Modal.Title className="fs-5 fw-bold">Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-4">
                    <p className="mb-0">Are you sure you want to delete <strong className="text-danger">"{taskToDelete?.task}"</strong>?</p>
                    <small className="text-secondary">This action cannot be undone.</small>
                </Modal.Body>
                <Modal.Footer className="border-0 pt-0">
                    <Button variant="outline-secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" className="px-4" onClick={handleDelete}>
                        Delete Task
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ShowList;