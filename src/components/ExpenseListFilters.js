import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate } from '../actions/filters';
import 'moment/locale/pt-br';
import 'react-dates/initialize'; // with version 12.6.0 is not necessary
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      calendarFocused: null
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
  };

  onFocusCalendarChange = calendarFocused => this.setState({ calendarFocused });

  render() {
    return(
      <div>
        <input 
            type="text" 
            value={this.props.filters.text} 
            onChange={(e) => { this.props.dispatch(setTextFilter(e.target.value));}} 
        />
        <select onChange={(e) => {
          e.target.value === 'amount'? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate()) 
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.props.filters.endDate} 
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={this.onDatesChange} 
          focusedInput={this.state.calendarFocused} 
          onFocusChange={this.onFocusCalendarChange} 
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
