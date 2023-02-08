import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => (
  <div className="new-expense">
    <div>
      <ExpenseForm />
    </div>
  </div>
);

export default NewExpense;
