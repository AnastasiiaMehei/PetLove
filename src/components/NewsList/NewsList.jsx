import { useState, useEffect } from 'react';
import NewsItem from "../NewsItem/NewsItem";
import { getNews } from '../../service/apiService';

export default function NewsList() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getNews();
        setNewsItems(fetchedNews);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    fetchNews();
  }, []);

  if (!newsItems || newsItems.length === 0) {
    return <p>Loading news...</p>;
  }

  return (
    <div className="news-list">
      {newsItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  );
};

