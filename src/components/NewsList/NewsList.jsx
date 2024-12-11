import NewsItem from "../NewsItem/NewsItem";
import PropTypes from 'prop-types';
import css from './NewsList.module.css'
export default function NewsList({ newsItems }) {
  if (!newsItems || newsItems.length === 0) {
    return <p>No news found.</p>;
  }
  return (
    <div className={css.newsList}>
      {newsItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  );
}

NewsList.propTypes = {
  newsItems: PropTypes.array.isRequired,
};
