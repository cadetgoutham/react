import React from "react"

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const createPaginationArray = () => {
        const range = 5
        const startPage = Math.max(currentPage - Math.floor(range / 2), 1)
        const endPage = Math.min(startPage + range - 1, totalPages)

        const pages = []
        for (let page = startPage; page <= endPage; page++) {
            pages.push(page)
        }
        return pages
    }

    return (
        <nav className="pagination" aria-label="Pagination">
            <ul className="pagination__list">
                <li>
                    <button
                        className="pagination__button"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {createPaginationArray().map((page) => (
                    <li key={page}>
                        <button
                            className={`pagination__button${currentPage === page ? ' is-current' : ''}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className="pagination__button"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
