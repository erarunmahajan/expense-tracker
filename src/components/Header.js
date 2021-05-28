import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>Expense Tracker</h3>
      <NavLink activeClassName="is-active" exact to="/">Home</NavLink>
      <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
      <NavLink activeClassName="is-active" to="/help">Find Help</NavLink>
    </div>
  )
}

export default Header;