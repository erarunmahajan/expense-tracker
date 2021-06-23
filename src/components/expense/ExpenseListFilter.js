import React from 'react';
import { connect } from 'react-redux';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { setEndDate, setSortByAmount, setSortByDate, setStartDate, setTextFilter } from '../../actions/filtersAction';



const ExpenseFilter = (props) => {

  const [focusedInput, setIsFocused] = React.useState(null);

  const handleChangetext = (e) => {
    const text = e.target.value;
    props.dispatch(setTextFilter({ text }))
  }
  const handleOption = (e) => {
    const sortByMethod = e.target.value;
    sortByMethod === 'amount' ? props.dispatch(setSortByAmount()) : props.dispatch(setSortByDate());
  }

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate))
  }

  return (
    <>
      {
        props.expenses.length > 0 &&
        <>
          <input type="text" value={props.filters.text} onChange={handleChangetext} />
          <select value={props.filters.sortBy} onChange={handleOption}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </select>
          <DateRangePicker
            startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={onDatesChange} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => setIsFocused(focusedInput)} // PropTypes.func.isRequired,
            numberOfMonths={1}
            readOnly
            isOutsideRange={() => false}
            showClearDates
            small
          />
        </>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  filters: state.filters,
  expenses: state.expenses
})

export default connect(mapStateToProps)(ExpenseFilter)