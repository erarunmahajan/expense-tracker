import React from 'react';
import { connect } from 'react-redux';
import { setSortByAmount, setSortByDate, setTextFilter } from '../../actions/filtersAction';

const ExpenseFilter = (props) => {

  console.log(props)
  const handleChangetext =(e)=>{
    const text = e.target.value;
    props.dispatch(setTextFilter({text}))
  }
  const handleOption=(e)=>{
    const sortByMethod = e.target.value;
    sortByMethod==='amount'? props.dispatch(setSortByAmount()) : props.dispatch(setSortByDate()); 
  }

  return (
    <>
      <input type="text" value={props.filter.text} onChange={handleChangetext} />
      <select value={props.filter.sortBy} onChange={handleOption}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
    </>
  )
}

const mapStateToProps=(state)=>({
  filter:state.filters
})

export default connect(mapStateToProps)(ExpenseFilter)