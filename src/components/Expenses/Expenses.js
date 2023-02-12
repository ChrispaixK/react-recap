//  I am using eslint that's why i added props valitation
//  and destructured props assignement
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const { expensesList } = props;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </div>
      <div>
        {expensesList.map((exp) => (
          <div key={exp.id}>
            <ExpenseItem
              id={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />
          </div>
        ))}
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
