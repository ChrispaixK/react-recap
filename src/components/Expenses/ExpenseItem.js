import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const {
    id, title, amount, date,
  } = props;

  const [actualTitle, changeTitle] = useState(title);

  const clickHandler = () => {
    const i = prompt();
    changeTitle(i);
  };
  return (
    <Card id={id} className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{actualTitle}</h2>
        <div className="expense-item_price">{amount}</div>
        <button onClick={clickHandler} type="button">change title</button>
      </div>
    </Card>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseItem;
