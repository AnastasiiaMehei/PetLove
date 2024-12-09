import sprite from "../../images/icons.svg";
import css from './SearchField.module.css'
export default function SearchField() {
    return (

        <div>
              <div>
        <input className={css.input} type="text" placeholder="Search" />
        <svg className={css.search}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </div>
        </div>
    )
}