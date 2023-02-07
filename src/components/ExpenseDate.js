import React from 'react';
import propTypes from 'prop-types';

const ExpenseDate = (props) => {
  const { date } = props;
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: propTypes.instanceOf(Date).isRequired,
};

export default ExpenseDate;
