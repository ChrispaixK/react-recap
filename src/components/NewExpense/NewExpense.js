import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const { onAddExpense } = props;
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <div>
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
      </div>
    </div>
  );
};

NewExpense.propTypes = {
  onAddExpense: PropTypes.string.isRequired,
};
export default NewExpense;
