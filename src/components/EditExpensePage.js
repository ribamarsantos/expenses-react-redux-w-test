import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import OptionModal from './OptionModal';

export class EditExpensePage extends React.Component {

    state = {
        modalIsOpen: false
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/')
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    handleConfirmation = () => {
        this.setState({modalIsOpen: false});
        this.props.startRemoveExpense({ id: this.props.expense.id } );
        this.props.history.push('/');          
    }

    handleClearSelectedOption = () => {
        this.setState({modalIsOpen: false});
    }
    render() {
        return (
            <div>
                <div className="page-header">
                 <div className="content-container">
                    <h1 className="page-header__title">Edit Expense </h1>
                 </div>
               </div>
               <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.openModal}>
                        Remove Expense
                    </button>
                    <OptionModal
                        selectedOption={this.state.modalIsOpen}
                        handleConfirmation={this.handleConfirmation}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                     /> 
                </div>
        </div>            
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);