import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => (
  <div className="expense-item">
    <div>March 28th 221</div>
    <div className="expense-item_description">
      <h2>Car Insurance</h2>
      <div className="expense-item_price">$239</div>
    </div>
  </div>
);

export default ExpenseItem;
