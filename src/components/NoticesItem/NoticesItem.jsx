import PropTypes from 'prop-types';
import { useState } from 'react';
import sprite from "../../images/icons.svg";
import ModalAttention from '../ModalAttention/ModalAttention';
import ModalNotice from '../ModalNotice/ModalNotice';
import css from './NoticesItem.module.css'
import { addToFavorites, removeFromFavorites, getNoticeById } from '../../service/apiService';
export default function NoticesItem({ _id, imgURL, title, popularity, name, birthday, sex, species, category, comment, price }) {
    const [isFavorite, setIsFavorite] = useState(false); // Assume initial state
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const isAuthenticated = Boolean(localStorage.getItem('token')); // Check if user is authenticated
  
    const handleLearnMore = async () => {
      if (!isAuthenticated) {
        setModalContent(<ModalAttention />);
      } else {
        try {
          const noticeDetails = await getNoticeById(_id);
          setModalContent(<ModalNotice {...noticeDetails} />);
        } catch (error) {
          console.error('Error fetching notice details:', error);
        }
      }
      setShowModal(true);
    };
  
    const handleFavoriteToggle = async () => {
      if (!isAuthenticated) {
        setModalContent(<ModalAttention />);
        setShowModal(true);
        return;
      }
  
      try {
        if (isFavorite) {
          await removeFromFavorites(_id);
        } else {
          await addToFavorites(_id);
        }
        setIsFavorite(!isFavorite);
      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
    };
  
    return (
        <div className={css.wrapperFindCard }>
            <div className={css.findCardBackgroundImg}
            style={{ backgroundImage: `url(${imgURL})` }}
            >

            </div>
            <div className={css.divCard}>
                <div className={css.divNamePet}>
                    <p className={css.namePet}>
                    {title}                    </p>
                    <div className={css.divYellowStar}>
                    <svg className={css.yellowStar}>
                   <use xlinkHref={`${sprite}#icon-yellowStar`}></use>                 
                   </svg>
                   <p>{popularity}</p>
                    </div>
                    
                    
                </div>
                <div className={css.divPetsCharacteristics}>
                
                <div className={css.divPetsDescription}>
    <p className={css.namePet}>
        Name 
    </p>
    <p className={css.namePetApi}>{name}</p>
</div>
<div className={css.divPetsDescription}>
    <p className={css.namePet}>
    Birthday
    </p>
    <p className={css.namePetApi}>{birthday}</p>
</div>

<div className="divPetsDescription">
    <p className={css.namePet}>
    Sex
    </p>
    <p className={css.namePetApi}>{sex}</p>
</div>
<div className="divPetsDescription">
    <p className={css.namePet}>
    Species
    </p>
    <p className={css.namePetApi}>{species}</p>
</div>
<div className="divPetsDescription">
    <p className={css.namePet}>
    Category
    </p>
    <p className={css.namePetApi}>{category}</p>
</div>
                    </div>

                    <p className={css.petsComment}>{comment}</p>

            </div>
            <div className={css.divLearnMoreBtn}>
            <p className={css.price}>
  {price !== undefined ? `$${price}` : 'Not available'}
</p><div className={css.divSend}>
<button onClick={handleLearnMore} className={css.learnMoreBtn} type="button">Learn more</button>
<button onClick={handleFavoriteToggle} className={css.btnLike} type="button"> 
<svg className={css.iconYellowLike}>
                   <use xlinkHref={`${sprite}#icon-yellowLike`}></use>                 
                   </svg>
</button>
{showModal && (
        <div className={css.modal}>
          {modalContent}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
</div>
            </div>
            
        </div>
    )
}
NoticesItem.propTypes = {
    _id: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string,
    sex: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    price: PropTypes.number,
  };
