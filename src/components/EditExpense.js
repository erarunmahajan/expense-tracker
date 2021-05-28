import React from 'react';
import { useHistory,useLocation  } from 'react-router';
import  ExpenseForm  from './expense/ExpenseForm';

const EditExpense = () => {
  let history = useHistory();
  const editExpense = useLocation().expense;
  return (
    <div>
      {editExpense ? <ExpenseForm expense={editExpense}/> : history.push('/') }
    </div>
  )
}

export default EditExpense;

// console.log(useParams());
// console.log(useLocation());
// console.log(useHistory());
// console.log(useRouteMatch());