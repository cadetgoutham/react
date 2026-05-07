import React, { useReducer } from 'react';
import { Badge } from 'react-bootstrap';
import './index.css';
import Todo from './Todo';
import TodoList from './TodoList';

export const ACTIONS = {
  ADD_LIST: "AddTodo",
  DELETE_LIST: "DeleteTodo",
  TOGGLE_STATUS: "ToggleStatus"
};

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_LIST:
      return [{ id: Date.now(), task: action.payload.task, status: true }, ...state];
    case ACTIONS.TOGGLE_STATUS:
      return state.map(todo => 
        todo.id === action.payload.id ? { ...todo, status: !todo.status } : todo
      );
    case ACTIONS.DELETE_LIST:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(Reducer, []);

  const activeTodos = todos.filter(todo => todo.status);
  const completedTodos = todos.filter(todo => !todo.status);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="todo-card-container">
            <h2 className="text-center fw-bold mb-4" style={{ color: 'var(--dark-blue)' }}>
              Task Manager
            </h2>
            <Todo dispatch={dispatch} />
            
            <div className="row mt-4">
              {/* Active Tasks Column */}
              <div className="col-12 col-md-6">
                <h5 className="text-center mb-3 section-title">
                  Active Tasks
                  <Badge bg="success" className="ms-2">{activeTodos.length}</Badge>
                </h5>
                <div className="tasks-column">
                  {activeTodos.length > 0 ? (
                    activeTodos.map(todo => (
                      <TodoList key={todo.id} dispatch={dispatch} list={todo} />
                    ))
                  ) : (
                    <div className="empty-state">No active tasks</div>
                  )}
                </div>
              </div>

              {/* Completed Tasks Column */}
              <div className="col-12 col-md-6">
                <h5 className="text-center mb-3 section-title">
                  Completed Tasks
                  <Badge bg="secondary" className="ms-2">{completedTodos.length}</Badge>
                </h5>
                <div className="tasks-column">
                  {completedTodos.length > 0 ? (
                    completedTodos.map(todo => (
                      <TodoList key={todo.id} dispatch={dispatch} list={todo} />
                    ))
                  ) : (
                    <div className="empty-state">No completed tasks</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;