import PropTypes from 'prop-types';
import sprite from "../../images/icons.svg";
import css from './Pagination.module.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    const halfPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

    let startPage = Math.max(1, currentPage - halfPageNumbersToShow);
    let endPage = Math.min(totalPages, currentPage + halfPageNumbersToShow);

    if (currentPage <= halfPageNumbersToShow) {
      endPage = Math.min(totalPages, maxPageNumbersToShow);
    }

    if (currentPage + halfPageNumbersToShow >= totalPages) {
      startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(<span key="start-ellipsis">...</span>);
    }

    if (endPage < totalPages) {
      pageNumbers.push(<span key="end-ellipsis">...</span>);
    }

    return pageNumbers;
  };

  if (totalPages <= 1) {
    return null; // Hide pagination if there's only one page
  }

  return (
    <div className={css.loadMoreBtnsDiv}>
      <button className={css.loadMoreBtns} type="button" onClick={handleFirstPage}
        disabled={currentPage === 1}>
        <svg className={css.iconLeft}>
          <use xlinkHref={`${sprite}#icon-left-side`}></use>
        </svg>
        <svg className={css.iconLeft}>
          <use xlinkHref={`${sprite}#icon-left-side`}></use>
        </svg>
      </button>
      <button className={css.loadMoreBtns} type="button" onClick={handlePreviousPage}
        disabled={currentPage === 1}>
        <svg className={css.iconLeft}>
          <use xlinkHref={`${sprite}#icon-left-side`}></use>
        </svg>
      </button>

      {renderPageNumbers()}

      <button className={css.loadMoreBtns} type="button" onClick={handleNextPage}
        disabled={currentPage === totalPages}>
        <svg className={css.iconLeft}>
          <use xlinkHref={`${sprite}#icon-right-side`}></use>
        </svg>
      </button>
      <button className={css.loadMoreBtns} type="button" onClick={handleLastPage}
        disabled={currentPage === totalPages}>
        <svg className={css.iconLeft}>
          <use xlinkHref={`${sprite}#icon-right-side`}></use>
        </svg>
        <svg className={css.iconLeft}>
          <use xlinkHref={`${sprite}#icon-right-side`}></use>
        </svg>
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
