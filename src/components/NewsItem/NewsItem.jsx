
import css from "./NewsItem.module.css";
import PropTypes from 'prop-types';

export default function NewsItem({ imgUrl, title, text, date }) {
  return (
    <div className={css.wrapperNewsCard}>
      <div className={css.wrapperNewsCardPhoto}
   style={{ backgroundImage: `url(${imgUrl})` }}
   >      {/* <img src={imgUrl} alt={title} /> */}

      </div>
      <div className={css.wrapperNewsCardText}>
        <p className={css.title}>{title}</p>
        <p className={css.description}>{text}</p>
      </div>
      <div className={css.readMoreDiv}>
        <p className={css.date}>{new Date(date).toLocaleDateString()}</p>
        <button className={css.btn} type="button">
          Read more
        </button>
      </div>

    </div>
  );
}

NewsItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};