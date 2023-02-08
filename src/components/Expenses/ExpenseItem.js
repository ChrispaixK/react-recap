import React from 'react';
import propTypes from 'prop-types';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const {
    id, title, amount, date,
  } = props;

  return (
    <Card id={id} className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{amount}</div>
      </div>
    </Card>
  );
};

ExpenseItem.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
  date: propTypes.instanceOf(Date).isRequired,
};

export default ExpenseItem;
