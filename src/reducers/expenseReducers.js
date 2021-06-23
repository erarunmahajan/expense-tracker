const defaultExpensesState = [];

export const expensesReducers = (state = defaultExpensesState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        }
        return expense
      })
    case 'FETCH_EXPENSES':
      return action.expenses
    default:
      return state
  }
}