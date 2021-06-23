import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ErrorPage, AddExpense, EditExpense, ExpenseDashboard, HelpPage } from '../components/index'
import LoginPage from '../components/LoginPage';
import  PrivateRoutes  from './PrivateRoutes';
import  PublicRoutes  from './PublicRoutes';


export const history = createHistory();

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch> 
        <PrivateRoutes path="/" component={ExpenseDashboard} exact/>
        <PublicRoutes path="/login" component={LoginPage} />
        <PrivateRoutes path="/create" component={AddExpense} />
        <PrivateRoutes path="/edit/:id" component={EditExpense} />
        <PrivateRoutes path="/help" component={HelpPage} />
        <Route path="*" component={ErrorPage} />
        
      </Switch>
    </Router>
  );
}

export default AppRoutes;
