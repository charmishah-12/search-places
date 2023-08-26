import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (!totalPages) {
    return null;
  }

  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <span
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
