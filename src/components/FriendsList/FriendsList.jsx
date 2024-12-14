import { useEffect, useState } from 'react';
import FriendsItem from "../FriendsItem/FriendsItem";
import { getPartners } from '../../service/apiService'; // Assume this function fetches partners data
import css from './FriendsList.module.css'
import Pagination from '../Pagination/Pagination';
export default function FriendsList() {
    const [partners, setPartners] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Example total pages
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const data = await getPartners();
                setPartners(data);
            } catch (error) {
                console.error('Error fetching partners:', error);
            }
        };

        fetchPartners();
    }, []);

    return (
        <div className={css.friendsList}>
            {partners.map((partner, index) => (
                <FriendsItem key={index} partner={partner} />
            ))}
              <Pagination   currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
               />
        </div>
    );
}