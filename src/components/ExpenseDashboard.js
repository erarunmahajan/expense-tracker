import React from 'react';
import ExpenseList from './expense/ExpenseList';
import ExpenseFilter from './expense/ExpenseListFilter';


const ExpenseDashboard = () => {
  return (
    <div>
      Expense Dashboard
      <ExpenseFilter />
      <ExpenseList/>
    </div>
  )
}

export default ExpenseDashboard;