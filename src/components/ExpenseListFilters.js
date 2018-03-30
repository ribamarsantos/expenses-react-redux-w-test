import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate } from '../actions/filters';
import 'moment/locale/pt-br';
// import 'react-dates/initialize'; // with version 12.6.0 is not necessary
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      calendarFocused: null
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
  };

  onFocusCalendarChange = calendarFocused => this.setState({ calendarFocused });

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  onSortChange = (e) => {
    e.target.value === 'amount'? this.props.sortByAmount() : this.props.sortByDate()
  }
  render() {
    return(
      <div>
        <input 
            type="text" 
            value={this.props.filters.text} 
            onChange={this.onTextChange} 
        />
        <select onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="start"
          endDate={this.props.filters.endDate} 
          endDateId="end"
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

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByAmount: () => dispatch(sortByAmount()) ,
    sortByDate: () => dispatch(sortByDate())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
