//  I am using eslint that's why i added props valitation
//  and destructured props assignement
import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  const { expensesList } = props;

  return expensesList.map((exp) => (
    <div key={exp.id}>
      <ExpenseItem
        id={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    </div>
  ));
};

Expenses.propTypes = {
  expensesList: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.date,
    ),
  ).isRequired,
};

export default Expenses;
