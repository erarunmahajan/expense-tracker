import { createStore, combineReducers } from 'redux';
import { expensesReducers } from '../reducers/expenseReducers';
import { filtersReducers } from '../reducers/filtersReducers';



const configStore = () =>{
  const store = createStore(
    combineReducers({
      expenses: expensesReducers,
      filters: filtersReducers
    })
  );

  return store;
}

export default configStore;
