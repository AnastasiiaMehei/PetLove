import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sprite from "../../images/icons.svg";
import css from "./ModalAttention.module.css";
import { useEffect } from "react";
export default function ModalAttention({ onClose }) {
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
    <div className={css.modalOverlay} onClick={handleBackdropClick}>
      <div className={css.wrapperModalAttention}>
        <div className={css.divSvg}>
          <svg className={css.iconClose} onClick={onClose}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </div>
        <div className={css.imageBackground}>
          <div className={css.img}></div>
        </div>
        <p className={css.attention}>Attention</p>
        <p className={css.attentionParagraph}>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className={css.btnsRegLogDiv}>
           <Link to="/users/signin" className={css.btnsRegLog}>Log In</Link>
           <Link to="/users/signup" className={css.btnsRegLog}>Registration</Link>
        </div>
      </div>
    </div>
  );
}
ModalAttention.propTypes = {
    onClose: PropTypes.func.isRequired,
};