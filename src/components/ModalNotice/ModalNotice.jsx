import PropTypes from 'prop-types';

import sprite from "../../images/icons.svg";

import css from './ModalNotice.module.css'
import { useEffect } from 'react';
export default function ModalNotice({ name, popularity, birthday, sex, species, category, comment, price, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
        window.removeEventListener('keydown', handleEscape);
    };
}, [onClose]);

const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
        onClose();
    }
};
  
  return (
        <div className={css.modalOverlay}  onClick={handleBackdropClick}>
            <div className={css.wrapperModalNotice}>
<div>
<svg className={css.iconClose} onClick={onClose}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
</div>
<div className={css.backgroundImg}>
   <p className={css.sellParagraph}>Sell</p>
</div>
<div>
    <p className={css.title}>Golden Retriever Puppies</p>
    <div className={css.divRating}>      
          <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-yellowStar`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-whiteStar`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-whiteStar`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-whiteStar`}></use>
          </svg>
          <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-whiteStar`}></use>
          </svg>
          <p className={css.rating}>{popularity}</p>
    </div>
        <div className={css.divPetsCharacteristics}>
                    
                    <div className="divPetsDescription">
        <p className={css.namePet}>
            Name 
        </p>
        <p className={css.namePetApi}>{name}</p>
    </div>
    <div className="divPetsDescription">
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
                        <p className={css.petsComment}>{comment}</p>
    
                        </div>
                        <p className={css.price}>${price}</p>

</div>
<div className={css.divBtnsAddContact}>
  <button className={css.btnsAddContact} type="button">Add to
  <svg className={css.iconStar}>
            <use xlinkHref={`${sprite}#icon-whiteLike`}></use>
          </svg></button><button className={css.btnsAddContact} type="button">Contact</button>
</div>

            </div>
        </div>
    )
}
ModalNotice.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,

};
