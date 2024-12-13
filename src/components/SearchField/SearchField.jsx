import PropTypes from 'prop-types';
import sprite from "../../images/icons.svg";
import css from './SearchField.module.css'
export default function SearchField({ placeholder, value, onChange }) {
    return (

  
              <div className={css.inputDiv}>
        <input className={css.input} type="text"  value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}/>
        <svg className={css.search}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </div>
    )
}
SearchField.propTypes = {
  value: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};