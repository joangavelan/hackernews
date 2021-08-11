import React from 'react'
import './Pagination.scss'

const Pagination = ({ section, hits, setPage }) => {

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function nextPage() {

  }

  function previousPage() {

  }

  return (
    hits.length > 0 && section === 'all' &&
    <div className="Pagination">
      <div className="Pagination__item">
        <i className="Pagination__arrow left"></i>
      </div>
      <ul className="Pagination__page-numbers">
        {pageNumbers.map((pageNumber, index) => (
          <div key={index} className="Pagination__item" onClick={() => setPage(pageNumber)}>
            <li className="Pagination__page-number" >{pageNumber}</li>
          </div>
        ))}
      </ul>
      <div className="Pagination__item">
        <i className="Pagination__arrow right"></i>
      </div>
    </div>
  )
}

export default Pagination