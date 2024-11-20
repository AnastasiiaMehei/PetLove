import NewsCard from "../../components/NewsCard/NewsCard";
import sprite from "../../images/icons.svg";

import css from "./NewsPage.module.css";
export default function NewsPage() {
  return (
    <div className={css.wrapperNews}>
      <h2 className={css.titleNews}>News</h2>
      <div>
        <input className={css.input} type="text" placeholder="Search" />
        <svg className={css.search}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </div>
      <div className={css.newsCard}>
        <NewsCard />
      </div>
    </div>
  );
}
