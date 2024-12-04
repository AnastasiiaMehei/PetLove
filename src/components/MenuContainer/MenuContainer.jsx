import { NavLink } from "react-router-dom";
import sprite from "../../images/icons.svg";

import css from './MenuContainer.module.css'
export default function MenuContainer () {
    return (

        <div className={css.wrapperMenuContainer}>
 <div className={css.btnDiv}>
 <button className={css.btn} type="button">
   <svg className={css.iconClose}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
   </button>
 </div>
   <div>
   <nav className={css.navLinks}>
    <NavLink className={css.navLink} to={"/news"}>News</NavLink>
    <NavLink className={css.navLink} to={"/friends"}>Find pet</NavLink>
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