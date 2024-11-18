import sprite from "../../images/icons.svg";

import css from './Header.module.css'
export default function Header() {
  return <div className={css.container}>
<div>
<svg className={css.logoMob}>
                  <use xlinkHref={`${sprite}#icon-logoMob`}></use>
                </svg>
</div>
<button className={css.btn}>
<svg className={css.iconMenu}>
                  <use xlinkHref={`${sprite}#icon-menu`}></use>
                </svg>
</button>
  </div>;
}
