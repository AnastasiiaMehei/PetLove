import { useState, useEffect } from "react";
import NewsList from "../../components/NewsList/NewsList";
import SearchField from "../../components/SearchField/SearchField";
import css from "./NewsPage.module.css";
import { getNews } from "../../service/apiService";
import sprite from "../../images/icons.svg";
import ModalNotice from "../../components/ModalNotice/ModalNotice";


export default function NewsPage() {
  const [newsItems, setNewsItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getNews(searchQuery);
        setNewsItems(fetchedNews); // Ensure this is an array
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };

    fetchNews();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className={css.wrapperNews}>
      <ModalNotice/>
      <h2 className={css.titleNews}>News</h2>
      <SearchField onSearch={handleSearch} />
      <div className={css.newsCard}>
        <NewsList newsItems={newsItems} />
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
