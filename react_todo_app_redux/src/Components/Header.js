import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { myList } = useSelector(state => state.tasks);
  
  // Dynamic calculation for a more professional summary
  const taskCount = myList.length;

  return (
    <header className="py-4 mb-2 text-center">
      <h1 className="display-5 fw-bold text-white mb-2" style={{ letterSpacing: '-1px' }}>
        Task<span className="text-secondary">Manager</span>
      </h1>
      
      <div className="d-flex justify-content-center align-items-center gap-2">
        <span className="text-secondary small fw-bold text-uppercase tracking-wider">
          Status Dashboard
        </span>
        <span className="bg-white text-dark px-2 py-0 rounded-pill small fw-bold">
          {taskCount} {taskCount === 1 ? 'Task' : 'Tasks'} Pending
        </span>
      </div>
      
      {/* Decorative subtle divider */}
      <hr className="mt-4 opacity-10 mx-auto" style={{ width: '50px', borderTop: '2px solid white' }} />
    </header>
  );
}

export default Header;