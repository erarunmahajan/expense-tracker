import { db } from '../firebase/firebase'
// Action generators

// 1. Add Expense Action

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().users.uid

    const { description = '', note = '', createdAt = 0, amount } = expenseData
    const expense = {
      description,
      note,
      createdAt,
      amount
    }

    return db.ref(`googleusers/${uid}/expenses`).push(expense).then(ref=>{
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }))
    })
  }
}


// 2. Remove Expense 

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({id})=>{
  return (dispatch, getState)=>{
    const uid = getState().users.uid

    return db.ref(`googleusers/${uid}/expenses/${id}`).remove().then(()=>{
      dispatch(removeExpense(id))
    })
  }
}



// 3. Edit Expense

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates)=>{
  return (dispatch, getState)=>{
    const uid = getState().users.uid
    return db.ref(`googleusers/${uid}/expenses/${id}`).update({...updates}).then(()=>{
      dispatch(editExpense(id, updates))
    })
  }
}


 // fetching data from firebase
export const fetchExpenses = (expenses) => ({
  type: 'FETCH_EXPENSES',
  expenses
})

export const startFetchExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().users.uid
    return db.ref(`googleusers/${uid}/expenses`).once("value").then((snapshot) => {
      const expenses = []
      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val() // provides object
        })
        dispatch(fetchExpenses(expenses))
      })
    }).catch(e => console.log(e))
  }
}