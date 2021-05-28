import React from "react";
import { useHistory } from "react-router";
import { removeExpense } from "../../actions/expensesAction";
import moment from 'moment';

const ExpenseListItem = (props) => {
  let history = useHistory();
  const removeCurrentExpense =()=>{
    props.dispatch(removeExpense({id:props.expense.id}));
  }
  return (
    <>
      <hr />
      {props.no}
      <div>Item : {props.expense.description} </div>
      <div>Note : {props.expense.note}</div>
      <div>Time : {moment(props.expense.createdAt).format("dddd, MMMM Do YYYY")}</div>
      <div>Amount : {props.expense.amount} </div>
      <button onClick={()=>history.push({pathname:`/edit/${props.expense.id}`,expense:props.expense})}>Edit</button>
      <button onClick={removeCurrentExpense}>Remove</button>
      <hr />
    </>
  )
}

export default ExpenseListItem;