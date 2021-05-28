import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router'
import moment from 'moment';
import { addExpense, editExpense } from '../../actions/expensesAction';

const ExpenseForm = (props) => {

  const expense = props.expense;
  const oldDesc = expense && expense.description;
  const oldNote = expense && expense.note;
  const oldAmount = expense && expense.amount;
  const oldCreatedAt = expense && expense.createdAt;

  let currentTime = moment.now();
  let history = useHistory();

  const [description, setDescription] = useState(oldDesc || '')
  const [note, setNote] = useState(oldNote || '')
  const [amount, setAmount] = useState(oldAmount || '')
  const createdAt = currentTime;
  const[error, setError] = useState('');

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
    if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){ // Regular expression has been used for verifying amount accepting only two decimal places
      setAmount(amount);
    }
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    let newExpense = {
      description,
      note,
      createdAt,
      amount
    }
    if (!description || !note || !amount) {
      setError('Empty Fields');
    } else {
      if (expense) {
        if (oldDesc === description && oldNote === note && oldAmount === amount) {
          setError('Nothing Changed')
        } else {
          props.dispatch(editExpense(expense.id, newExpense));
          history.push({ pathname: '/', state: { updated: true } })
        }

      } else {
        props.dispatch(addExpense(newExpense));
        history.push({ pathname: '/', state: { saved: true } })
      }
    }
  }

  return (
    <>
      <button onClick={() => history.push('/')}>Cancel</button>
      <form >
        {error ? <p>{error}</p>:''}
        {!expense ? '' : <p>Last Updation done on {moment(oldCreatedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>}
        <input type="text" placeholder="Enter Description / Title" name="description" value={description} onChange={onChangeDescription} />
        <input type="text" placeholder="Enter Amount" name="amount" value={amount} onChange={onChangeAmount} />
        <textarea value={note} onChange={onChangeNote}>Enter a note for your expense</textarea>
        <button onClick={handleSubmit}>{expense ? 'Update' : 'Save'}</button>
      </form>
    </>
  )
}

export default connect()(ExpenseForm)
