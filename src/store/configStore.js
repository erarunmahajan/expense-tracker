import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { expensesReducers } from '../reducers/expenseReducers';
import { filtersReducers } from '../reducers/filtersReducers';
import userStateReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configStore = () =>{
  const store = createStore(
    combineReducers({
      expenses: expensesReducers,
      filters: filtersReducers,
      users:userStateReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
export default configStore;