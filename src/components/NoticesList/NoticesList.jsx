import { useEffect, useState } from 'react';
import NoticesItem from '../NoticesItem/NoticesItem';
import { getNotices } from '../../service/apiService';

export default function NoticesList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesData = await getNotices();
        setNotices(noticesData.results); // Assuming the API returns a 'results' array
      } catch (err) {
        console.error('Failed to fetch notices:', err);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div>
      {notices.map(notice => (
        <NoticesItem key={notice._id} {...notice} />
      ))}
    </div>
  );
}