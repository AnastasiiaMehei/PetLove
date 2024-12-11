import PropTypes from 'prop-types';
import sprite from "../../images/icons.svg";
import css from './SearchField.module.css'
export default function SearchField({ placeholder, onChange }) {
    return (

        <div>
              <div>
        <input className={css.input} type="text"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}/>
        <svg className={css.search}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </div>
        </div>
    )
}
SearchField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};