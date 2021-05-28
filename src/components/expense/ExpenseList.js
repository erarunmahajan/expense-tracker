import React from 'react';
import { connect } from 'react-redux'
import { visibleExpenses } from '../../selectors/visibleExpenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => {
  return (
    <div>
      {
        props.expenses.length > 0 ?
          props.expenses.map((expense, i) =>
            <ExpenseListItem key={i} expense={expense} dispatch={props.dispatch} no={i+1} />
          )
          :
          <p>Add Your expenses </p>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: visibleExpenses(state.expenses,state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);