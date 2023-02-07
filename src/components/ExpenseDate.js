import React from 'react';
import propTypes from 'prop-types';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const { date } = props;
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: propTypes.instanceOf(Date).isRequired,
};

export default ExpenseDate;
