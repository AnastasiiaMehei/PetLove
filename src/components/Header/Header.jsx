import { Link } from 'react-router-dom';

import sprite from "../../images/icons.svg";

import css from './Header.module.css'
import MenuContainer from '../MenuContainer/MenuContainer';
import { useState } from 'react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return <div className={css.container}>
<div className={css.logoLink}>
<Link to="/">
          <svg className={css.logoMob}>
            <use xlinkHref={`${sprite}#icon-logoMob`}></use>
          </svg>
        </Link>
</div>
{isMenuOpen ? (
        <>
          <button className={css.btn} onClick={toggleMenu}>
            <svg className={css.iconClose}>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </svg>
          </button>
          <MenuContainer onClose={() => setIsMenuOpen(false)} />
        </>
      ) : (
        <button className={css.btn} onClick={toggleMenu}>
          <svg className={css.iconMenu}>
            <use xlinkHref={`${sprite}#icon-menu`}></use>
          </svg>
        </button>
      )}
    </div>
}