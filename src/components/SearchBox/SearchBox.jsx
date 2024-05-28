import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search..."
      />
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchBox;
