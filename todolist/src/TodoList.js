import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';
import { ACTIONS } from './App';

export default function TodoList({ list, dispatch }) {
  const { id, task, status } = list;

  return (
    <Card 
      className={`mb-3 mt-3 border-0 shadow-sm ${status ? 'status-active' : 'status-completed'}`}
    >
      <Card.Body className="d-flex justify-content-between align-items-center py-2 px-3">
        <div className="d-flex align-items-center gap-2 flex-grow-1">
          <span 
            className="task-text"
            style={{ textDecoration: status ? 'none' : 'line-through', opacity: status ? 1 : 0.7 }}
          >
            {task}
          </span>
          <Badge 
            bg={status ? "success" : "secondary"} 
            className="status-badge"
          >
            {status ? "Active" : "Completed"}
          </Badge>
        </div>
        
        {/* Changed gap-2 to gap-3 for a wider space between buttons */}
        <div className="d-flex gap-3 align-items-center">
          <Button 
            variant={status ? "success" : "secondary"} 
            style={{marginRight:'1%'}}
            size="sm"
            onClick={() => dispatch({ type: ACTIONS.TOGGLE_STATUS, payload: { id } })}
          >
            {status ? "Complete" : "Undo"}
          </Button>
          <Button 
            variant="danger" 
            size="sm"
            onClick={() => dispatch({ type: ACTIONS.DELETE_LIST, payload: { id } })}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}