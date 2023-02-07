import React from 'react';
import propTypes from 'prop-types';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const {
    id, title, amount, date,
  } = props;

  return (
    <div id={id} className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{amount}</div>
      </div>
    </div>
  );
};

ExpenseItem.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
  date: propTypes.string.isRequired,
};

export default ExpenseItem;
