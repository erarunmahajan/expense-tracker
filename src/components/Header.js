import React from 'react';
import { NavLink } from "react-router-dom";
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux'

export const Header = ({startLogout}) => {
  return (
    <div>
      <h3>Expense Tracker</h3>
      <NavLink activeClassName="is-active" to="/" >Home</NavLink>
      <NavLink activeClassName="is-active" to="/create" >Create</NavLink>
      <NavLink activeClassName="is-active" to="/help" >Help</NavLink>
      <button onClick={startLogout}>Logout</button>
    </div>
  )
}

const mapDispatchProps =(dispatch)=>({
  startLogout:()=>dispatch(startLogout())
})



export default connect(undefined, mapDispatchProps)(Header);