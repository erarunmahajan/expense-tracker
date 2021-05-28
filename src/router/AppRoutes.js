import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Header, ErrorPage, AddExpense, EditExpense, ExpenseDashboard,HelpPage} from '../components/index'



const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ExpenseDashboard />
        </Route>
        <Route path="/create">
          <AddExpense/>
        </Route>
        <Route path="/edit/:id" strict>
          <EditExpense/>
        </Route>
        <Route path="/help">
          <HelpPage/>
        </Route>
        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
