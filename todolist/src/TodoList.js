import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'
import { ACTIONS } from './App';

export default function TodoList({list, dispatch}) {
  const {id, task, status} = list;
  return (
    <div className='container Todo'>
      <span style={{textDecoration: status ? '' : 'line-through'}}>{task}</span>
      <div className='Todo_button'>
        <Button variant="primary" type="submit" onClick={() => 
          dispatch({
            type:ACTIONS.UPDATE_LIST, 
            payload:{
                id : id
            }
          })}>{list.status ? "Done" : "Not Done"}</Button>
        <Button variant="danger" type="submit" onClick={() => 
          dispatch({
            type:ACTIONS.DELETE_LIST, 
            payload:{
                id : id
            }
          })}>Delete</Button>
      </div>
    </div>
  )
}
