import NewsItem from "../NewsItem/NewsItem";
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination'
import { useState } from 'react';

import css from './NewsList.module.css'
export default function NewsList({ newsItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  if (!newsItems || newsItems.length === 0) {
    return <p>No news found.</p>;
   
  }

  return (
    <div className={css.newsList}>
      {newsItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
          <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
      />
    </div>
  );
}

NewsList.propTypes = {
  newsItems: PropTypes.array.isRequired,
};
