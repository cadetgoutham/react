import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { ACTIONS } from './App';

export default function Todo({ dispatch }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch({ type: ACTIONS.ADD_LIST, payload: { task: name } });
    setName('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control 
          placeholder="Enter a new task..." 
          value={name}
          onChange={e => setName(e.target.value)}
          className="shadow-none"
        />
        <Button variant="primary" type="submit" className="px-4" style={{ background: 'var(--primary-gradient)', border: 'none', color: '#fff' }}>
          Add
        </Button>
      </InputGroup>
    </Form>
  );
}