import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
// import 'react-dates/initialize'; // with version 12.6.0 is not necessary 
import { SingleDatePicker } from 'react-dates';

// moment.locale('pl');

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description: '',
            amount: props.expense ? (props.expense.amount / 100).toString(): '',
            note: props.expense ? props.expense.note : '',
            createdAt:  props.expense? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({description}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if( !amount || amount.match(/^\d*(\.\d{0,2})?$/)){ 
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt}));
        }
    }
    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }
    onNoteChange = (e) => {
      // another way 
      e.persist();
      this.setState(() => ({note: e.target.value}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
           this.setState(() => ({ error: 'Please provide information for description and amount'}));
        }else{
           this.setState(() => { { error: '' }});
           this.props.onSubmit({
             description: this.state.description,
             amount: parseFloat(this.state.amount,10)* 100,
             createdAt: this.state.createdAt.valueOf(),
             note: this.state.note
           });
        }
    }
    render() {
        return(
            <form 
                onSubmit={this.onSubmit}
                className="form"
            >
            { this.state.error && <p className="form__error"> {this.state.error}</p>}
                <input
                    type="text"
                    className="text-input"
                    placeholder="description"
                    autoFocus
                    onChange={this.onDescriptionChange}
                    value={this.state.description}
                    />
                <input
                    type="text"
                    className="text-input"
                    placeholder="amount"
                    onChange={this.onAmountChange}
                    value={this.state.amount}
                />
                <SingleDatePicker
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused} 
                    onFocusChange={this.onCalendarFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}                   
                />                    
                <textarea
                    placeholder="note (optional)"
                    className="text-area"
                    onChange={this.onNoteChange}
                    value={this.state.note} 
                >
                </textarea>
                <div>
                    <button className="button"> Save Expense</button>
                </div>
            </form>
        );
    }
}