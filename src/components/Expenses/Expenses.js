//  I am using eslint that's why i added props valitation
//  and destructured props assignement
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const { expensesList } = props;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expensesList.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear,
  );

  return (
    <div>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      <ExpensesChart expenses={filteredExpenses} />
      <div>
        <ExpensesList expenses={filteredExpenses} />
      </div>
    </div>
  );
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
