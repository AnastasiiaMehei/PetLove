import  { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import {
  getCategories,
  getSexOptions,
  getSpecies,
  searchCities,
} from "../../service/apiService";

export default function NoticesFilters({ onFilterChange, onSortChange }) {
  const [categories, setCategories] = useState([]);
  const [sexOptions, setSexOptions] = useState([]);
  const [species, setSpecies] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    sex: "",
    species: "",
    location: null,
    search: "",
  });
  const [sort, setSort] = useState("popular");
  const locationSelectRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, sexData, speciesData] = await Promise.all([
          getCategories(),
          getSexOptions(),
          getSpecies(),
        ]);
        setCategories(categoriesData);
        setSexOptions(sexData);
        setSpecies(speciesData);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const loadCityOptions = async (inputValue) => {
    if (!inputValue) return [];
    try {
      const cities = await searchCities(inputValue);
      return cities.map((city) => ({
        value: city._id,
        label: city.cityEn,
      }));
    } catch (error) {
      console.error("Error loading city options:", error);
      return [];
    }
  };

  const handleSortChange = (sortType) => {
    setSort(sortType);
    onSortChange(sortType);
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      sex: "",
      species: "",
      location: null,
      search: "",
    });
    setSort("popular");
    onFilterChange({
      category: "",
      sex: "",
      species: "",
      location: null,
      search: "",
    });
    onSortChange("popular");
    if (locationSelectRef.current) {
      locationSelectRef.current.clearValue();
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.filterContainer}>
        <div className={css.inputSearch}>
          <SearchField
            value={filters.search}
            onChange={(value) => handleFilterChange("search", value)}
            placeholder="Search"
          />
        </div>
        <select
          className={css.category}
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className={css.category}
          value={filters.sex}
          onChange={(e) => handleFilterChange("sex", e.target.value)}
        >
          <option value="">All Sexes</option>
          {sexOptions.map((sex) => (
            <option key={sex} value={sex}>
              {sex}
            </option>
          ))}
        </select>
        <select
          className={css.categoryType}
          value={filters.species}
          onChange={(e) => handleFilterChange("species", e.target.value)}
        >
          <option value="">All Species</option>
          {species.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </select>
        <div className={css.inputSearch}>
          <Select
            ref={locationSelectRef}
            value={filters.location}
            onChange={(option) =>
              handleFilterChange("location", option ? option.value : null)
            }
            placeholder="Location"
            loadOptions={loadCityOptions}
            isClearable
          />
        </div>
      </div>
      <div className={css.divBtnsChose}>
        <button
          className={`${css.buttonsChose} ${
            sort === "popular" ? css.active : ""
          }`}
          type="button"
          onClick={() => handleSortChange("popular")}
        >
          Popular
        </button>
        <button
          className={`${css.buttonsChose} ${
            sort === "cheap" ? css.active : ""
          }`}
          type="button"
          onClick={() => handleSortChange("cheap")}
        >
          Cheap
        </button>
        <button
          className={`${css.buttonsChose} ${
            sort === "expensive" ? css.active : ""
          }`}
          type="button"
          onClick={() => handleSortChange("expensive")}
        >
          Expensive
        </button>
        <button
          className={`${css.buttonsChose} ${
            sort === "unpopular" ? css.active : ""
          }`}
          type="button"
          onClick={() => handleSortChange("unpopular")}
        >
          Unpopular
        </button>
      </div>
      <button className={css.buttonsChose} onClick={resetFilters}>
        Reset
      </button>
    </div>
  );
}

NoticesFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};
