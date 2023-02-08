//  I am using eslint that's why i added props valitation
//  and destructured props assignement
import React from 'react';
import propTypes from 'prop-types';
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
  expensesList: propTypes.arrayOf(
    propTypes.objectOf(
      propTypes.string,
      propTypes.string,
      propTypes.number,
      propTypes.date,
    ),
  ).isRequired,
};

export default Expenses;
