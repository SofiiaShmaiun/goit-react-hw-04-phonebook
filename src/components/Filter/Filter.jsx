import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onFilterChange }) => (
  <label className={css.filterLabel}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      placeholder="Enter filter"
      onChange={onFilterChange}
      value={value}
      className={css.filterInput}
    />
  </label>
);

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
