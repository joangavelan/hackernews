import React from 'react'
import './Pagination.scss'

const Pagination = ({ section, page, setPage, response }) => {

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nextPage = () => response && page < pageNumbers.length ? setPage(page => page + 1) : false;
  const previousPage = () => response && page > 1 ? setPage(page => page - 1) : false;
  const goToPage = (pageNum) => response ? setPage(pageNum) : false;

  return (
    section === 'all' &&
    <div className="Pagination">
      <div className="Pagination__item" onClick={() => previousPage()}>
        <i className="Pagination__arrow left"></i>
      </div>
      <ul className="Pagination__page-numbers">
        {pageNumbers.map(pageNumber => (
          <div 
            className={`Pagination__item ${page === pageNumber ? 'active' : ''}`}
            onClick={() => goToPage(pageNumber)}
            key={pageNumber}>
              <li className="Pagination__page-number" >{pageNumber}</li>
          </div>
        ))}
      </ul>
      <div className="Pagination__item" onClick={() => nextPage()}>
        <i className="Pagination__arrow right"></i>
      </div>
    </div>
  )
}

export default Pagination