import { useEffect, useState } from 'react';
import NoticesItem from '../NoticesItem/NoticesItem';
import { getNotices } from '../../service/apiService';
import Pagination from '../Pagination/Pagination';

export default function NoticesList() {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const noticesPerPage = 10; // Define how many notices per page

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesData = await getNotices(currentPage, noticesPerPage);
        setNotices(noticesData.results);
        setTotalPages(noticesData.totalPages); // Assuming the API returns total pages
      } catch (err) {
        console.error('Failed to fetch notices:', err);
      }
    };

    fetchNotices();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {notices.map(notice => (
        <NoticesItem key={notice._id} {...notice} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
