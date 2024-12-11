import SearchField from '../SearchField/SearchField'
import PropTypes from 'prop-types';

import css from "./NoticesFilters.module.css";
import { getCategories, getSexOptions, getSpecies, searchCities } from '../../service/apiService';

import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';

export default function NoticesFilters({ onFilterChange, onSortChange  }) {
  const [categories, setCategories] = useState([]);
  const [sexOptions, setSexOptions] = useState([]);
  const [species, setSpecies] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    sex: '',
    species: '',
    location: '',
  });

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
        console.error('Error fetching filter data:', error);
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
      return cities.map(city => ({
        value: city._id, // Assuming city has an _id field
        label: city.cityEn, // Assuming city has a cityEn field
      }));
    } catch (error) {
      console.error('Error loading city options:', error);
      return [];
    }
  };
  const [sort, setSort] = useState('popular');

  const handleSortChange = (value) => {
      setSort(value);
      onSortChange(value);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.filterContainer}>
        {/* <input className={css.search} type="text" placeholder="Search" /> */}
        <SearchField/>
        <select
          className={css.category}
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className={css.sex}
          value={filters.sex}
          onChange={(e) => handleFilterChange('sex', e.target.value)}
        >
          {sexOptions.map((sex) => (
            <option key={sex} value={sex}>
              {sex}
            </option>
          ))}
        </select>
        <select
          className={css.species}
          value={filters.species}
          onChange={(e) => handleFilterChange('species', e.target.value)}
        >
          {species.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </select>
         {/* <input className={css.search} type="text" placeholder="Location" /> */}
         {/* <Select
                className={css.select}
                value={filters.location}
                onChange={(option) => handleFilterChange('location', option ? option.value : '')}
                options={locations.map((location) => ({
                    value: location.id,
                    label: location.name,
                }))}
                placeholder="Select Location"
            /> */}
             <AsyncSelect
          className={css.select}
          cacheOptions
          loadOptions={loadCityOptions}
          defaultOptions
          onChange={(option) => handleFilterChange('location', option ? option.value : '')}
          placeholder="Search for a city"
        />
      </div>
      <div className={css.divBtnsChose}>
        <button                 className={`${css.buttonsChose} ${sort === 'popular' ? css.active : ''}`}
 type="button" onClick={() => handleSortChange('popular')}>Popular</button>
        <button  className={`${css.buttonsChose} ${sort === 'unpopular' ? css.active : ''}`}
                type="button"
                onClick={() => handleSortChange('unpopular')}
            >Unpopular</button>
        <button  className={`${css.buttonsChose} ${sort === 'cheap' ? css.active : ''}`}
                type="button"
                onClick={() => handleSortChange('cheap')}
            >Cheap</button>
        <button className={`${css.buttonsChose} ${sort === 'expensive' ? css.active : ''}`}
                type="button"
                onClick={() => handleSortChange('expensive')}
            >Expensive</button>
      </div>
    </div>
  );
}
NoticesFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};