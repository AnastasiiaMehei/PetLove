import { useState, useEffect } from "react";
import NewsList from "../../components/NewsList/NewsList";
import SearchField from "../../components/SearchField/SearchField";
import css from "./NewsPage.module.css";
import { getNews } from "../../service/apiService";
// import sprite from "../../images/icons.svg";


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
      <h2 className={css.titleNews}>News</h2>
      <SearchField  value={searchQuery}  onSearch={handleSearch} />
      <div>
        
      </div>
      <div className={css.newsCard}>
        <NewsList newsItems={newsItems} />
      </div>
     

    </div>
  );
}
