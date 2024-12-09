import NewsList from "../../components/NewsList/NewsList";
import SearchField from "../../components/SearchField/SearchField";

import css from "./NewsPage.module.css";
export default function NewsPage() {
  return (
    <div className={css.wrapperNews}>
      <h2 className={css.titleNews}>News</h2>
    <SearchField/>
      <div className={css.newsCard}>
        <NewsList />
      </div>
    </div>
  );
}
