import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expensesDate = {
      title: enteredTitle,
      amout: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expensesDate);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">
              <input
                value={enteredTitle}
                type="text"
                onChange={titleChangeHandler}
              />
              Title
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="Amount">
              <input
                value={enteredAmount}
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
              Amount
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">
              <input
                value={enteredDate}
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
              Date
            </label>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
      ;
    </div>
  );
};

export default ExpenseForm;
