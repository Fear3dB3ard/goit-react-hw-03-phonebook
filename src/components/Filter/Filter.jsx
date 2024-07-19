import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts by name..."
        className="filter-input"
      />
    );
  };
  
  Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  export default Filter;