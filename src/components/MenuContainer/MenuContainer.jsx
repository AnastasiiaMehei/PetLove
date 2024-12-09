import { NavLink } from "react-router-dom";
import sprite from "../../images/icons.svg";
import PropTypes from 'prop-types';


import css from './MenuContainer.module.css'
export default function MenuContainer ({ onClose }) {
    return (

        <div className={css.wrapperMenuContainer}>
 <div className={css.btnDiv}>
 <button className={css.btn} type="button" onClick={onClose}>
   <svg className={css.iconClose}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
   </button>
 </div>
   <div>
   <nav className={css.navLinks}>
    <NavLink className={css.navLink} to={"/news"}>News</NavLink>
    <NavLink className={css.navLink} to={"/notices"}>Find pet</NavLink>
    <NavLink className={css.navLink} to={"/friends"}>Our friends</NavLink>

   </nav>
   </div>
   <div className={css.buttonsDiv}>
    <button className={css.buttons} type="button">Log In</button>
    <button className={css.buttons} type="button">Registration</button>
   </div>
        </div>
    )
}

MenuContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
};