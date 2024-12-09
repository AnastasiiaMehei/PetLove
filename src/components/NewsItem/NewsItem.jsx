import sprite from "../../images/icons.svg";

import css from "./NewsItem.module.css";
export default function NewsItem() {
  return (
    <div className={css.wrapperNewsCard}>
      <div className={css.wrapperNewsCardPhoto}></div>
      <div className={css.wrapperNewsCardText}>
        <p className={css.title}>Title</p>
        <p className={css.description}>Description</p>
      </div>
      <div className={css.readMoreDiv}>
        <p className={css.date}>date</p>
        <button className={css.btn} type="button">
          Read more
        </button>
      </div>
      <div className={css.loadMoreBtnsDiv}>
        <button className={css.loadMoreBtns} type="button">
        <svg className={css.iconLeft}>
                  <use xlinkHref={`${sprite}#icon-left-side`}></use>
                </svg>
                <svg className={css.iconLeft}>
                  <use xlinkHref={`${sprite}#icon-left-side`}></use>
                </svg>
        </button>
        <button className={css.loadMoreBtns} type="button">
        <svg className={css.iconLeft}>
                  <use xlinkHref={`${sprite}#icon-left-side`}></use>
                </svg>
        </button>
        <button className={css.loadMoreBtns} type="button">1</button>
        <button className={css.loadMoreBtns} type="button">2</button>
        <button className={css.loadMoreBtns} type="button">...</button>
        <button className={css.loadMoreBtns} type="button">        <svg className={css.iconLeft}>
                  <use xlinkHref={`${sprite}#icon-right-side`}></use>
                </svg></button>
        <button className={css.loadMoreBtns} type="button">
        <svg className={css.iconLeft}>
                  <use xlinkHref={`${sprite}#icon-right-side`}></use>
                </svg>
                <svg className={css.iconLeft}>
                  <use xlinkHref={`${sprite}#icon-right-side`}></use>
                </svg>
        </button>

      </div>
    </div>
  );
}
