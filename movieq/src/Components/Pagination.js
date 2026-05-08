import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const createPaginationArray = () => {
      const range = 5; 
      const startPage = Math.max(currentPage - Math.floor(range / 2), 1);
      const endPage = Math.min(startPage + range - 1, totalPages);
  
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    };
  
    return (
      <div className="flex justify-center my-4">
        <nav aria-label="Pagination">
          <ul className="inline-flex items-center space-x-2">
            <li>
              <button
                className={`px-3 py-1 rounded-md border ${
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
  
            {createPaginationArray().map((page) => (
              <li key={page}>
                <button
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}
  
            <li>
              <button
                className={`px-3 py-1 rounded-md border ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

export default Pagination;
