import React from 'react';
import PropTypes from 'prop-types';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const { onChangeFilter, selected } = props;

  const dropdownChangeHandler = (e) => {
    e.preventDefault();
    onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year filter">
          Filter
          <select onChange={dropdownChangeHandler} value={selected}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {
  onChangeFilter: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

export default ExpensesFilter;
