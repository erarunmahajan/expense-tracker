import generateUniqueId from "generate-unique-id";

// Action generators

// 1. Add Expense Action

export const addExpense = ({ description = '', note = '', createdAt = 0, amount } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: generateUniqueId(),  //need to provide a unique id
    description,
    note,
    createdAt,
    amount
  }
})

// 2. Remove Expense 

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// 3. Edit Expense

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})