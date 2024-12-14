import PropTypes from "prop-types";
import { useState } from "react";
import sprite from "../../images/icons.svg";
import css from "./SearchField.module.css";
export default function SearchField({ value, onSearch }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    onSearch(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };
  return (
    <div className={css.inputDiv} onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search..."
        />
 <button type="submit"  className={css.search}>
          <svg type="submit"  className={css.searchSvg}>
            <use xlinkHref={`${sprite}#icon-search`}></use>
          </svg>
        </button>
        {inputValue && (
          <button type="button" onClick={handleClear} className={css.iconClose}>
            <svg className={css.iconClose}>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        )}
       
      </form>
    </div>
  );
}
SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
