import NewsItem from "../NewsItem/NewsItem";
import PropTypes from 'prop-types';

export default function NewsList({ newsItems }) {
  if (!newsItems || newsItems.length === 0) {
    return <p>No news found.</p>;
  }
  return (
    <div className="news-list">
      {newsItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  );
}

NewsList.propTypes = {
  newsItems: PropTypes.array.isRequired,
};
