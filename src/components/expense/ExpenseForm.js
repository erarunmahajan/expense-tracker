import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router'
import moment from 'moment';
import { startAddExpense, startEditExpense } from '../../actions/expensesAction';

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";


const ExpenseForm = (props) => {
  
  let history = useHistory();

  // setting variables for old expense data if any
  const expense = props.expense;
  const oldDesc = expense && expense.description;
  const oldNote = expense && expense.note;
  const oldAmount = expense && expense.amount;
  const oldCreatedAt = expense && expense.createdAt;

  // setting states for current values

  const [description, setDescription] = useState(oldDesc || '')
  const [note, setNote] = useState(oldNote || '')
  const [amount, setAmount] = useState(oldAmount || '')
  const [date, setDate] = useState(expense ? moment(oldCreatedAt) : moment());
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);



  // handle functions
  const onDateChange = (date) => {
    setDate(date)
  }

  const onFocusChange = ({ focused }) => {
    setIsFocused(focused)
  }

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  }


  const onChangeNote = (e) => {
    const note = e.target.value;
    setNote(note);
  }

  const onChangeAmount = (e) => {
    // need to accept only numbers as amount
    const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // Regular expression has been used for verifying amount accepting only two decimal places
      setAmount(amount);
    }
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    const createdAt = date
    let newExpense = {
      description,
      note,
      createdAt:createdAt.valueOf(),
      amount
    }
    if (!description || !note || !amount || !date) {
      setError('Empty Fields');
    } else {
      if (expense) {
        if (oldDesc === description && oldNote === note && oldAmount === amount && moment(oldCreatedAt).format("YYYYDDMM") === moment(date).format("YYYYDDMM") ) {
          setError('Nothing Changed')
        } else {
          props.dispatch(startEditExpense(expense.id, newExpense));
          history.push({ pathname: '/', state: { updated: true } })
        }
      } else {
        props.dispatch(startAddExpense(newExpense));
        history.push({ pathname: '/', state: { saved: true } })
      }
    }
  }

  
  return (
    <>
      <button onClick={() => history.push('/')}>Cancel</button>
      <form >
        {error ? <p>{error}</p> : ''}
        {!expense ? '' : <p>Last Updation done on {moment(oldCreatedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>}
        <input type="text" placeholder="Enter Description / Title" name="description" value={description} onChange={onChangeDescription} />
        <input type="text" placeholder="Enter Amount" name="amount" value={amount} onChange={onChangeAmount} />
        <SingleDatePicker
          id="Single_date_input"
          date={date}
          focused={isFocused}
          onDateChange={onDateChange}
          onFocusChange={onFocusChange}
          readOnly
          small
          showClearDate
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea value={note} onChange={onChangeNote}>Enter a note for your expense</textarea>
        <button onClick={handleSubmit}>{expense ? 'Update' : 'Save'}</button>

      </form>
    </>
  )
}

export default connect()(ExpenseForm)
