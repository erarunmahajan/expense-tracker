import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import AppRoutes, { history } from './router/AppRoutes';
import './index.css';
import configStore from './store/configStore';
import { auth } from './firebase/firebase'
import { startFetchExpenses } from './actions/expensesAction';
import { login, logout } from './actions/auth';

const store = configStore();

const jsx =  (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true
  }
}
ReactDOM.render(<p>Loading....</p>, document.getElementById('root'));


auth.onAuthStateChanged((user) => { // checking the state of user of logged in
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startFetchExpenses()).then(()=>{
      renderApp()
      if(history.location.pathname === "/login"){
        history.push("/")
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push("/login")
  }
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
