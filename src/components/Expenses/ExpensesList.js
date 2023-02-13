import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const { expenses } = props;
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses founds</h2>;
  }

  return (
    <div>
      {
        (expenses.map((exp) => (
          <ul className="expenses-list" key={exp.id}>
            <ExpenseItem
              id={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />
          </ul>
        )))
      }
      ;
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.string.isRequired,
};

export default ExpensesList;
