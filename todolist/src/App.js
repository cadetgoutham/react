import './App.css';
import React, {useReducer} from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

export const ACTIONS = {
  ADD_LIST : "AddTodo",
  DELETE_LIST : "DeleteTodo",
  UPDATE_LIST : "UpdateTodo"
}
const Reducer = (state, action) => {
  switch(action.type){
     case ACTIONS.ADD_LIST:
         return [...state, CreateList(action.payload.task)]
     case ACTIONS.UPDATE_LIST:
      return state.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, status : !todo.status}
        }
        return todo;
      })
      case ACTIONS.DELETE_LIST:
        return state.filter(todo => todo.id !== action.payload.id)
     default:
         return state;
  }
 }
 const CreateList = (name) => {
  return {
    id : Date.now(),
    task : name ,
    status : true
  }
 }
function App() {
  const [Todos, dispatch] = useReducer(Reducer, [])
  return (
    <div className="App">
      <div className='container'>
        <h2 className='text-center mb-4'>Todo List</h2>
        <Todo dispatch={dispatch}/>
        {
          Todos.map(tasks => <TodoList key={tasks.id} dispatch={dispatch} list={tasks}/>)
        }
      </div>  
    </div>
  );
}

export default App;
