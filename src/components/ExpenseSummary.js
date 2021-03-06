import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpenseSummary = ({allExpenses, expensesCount, expensesTotal} ) => {
    const expenseWord = expensesCount <= 1 ? 'expense': 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    return (
        <div className="page-header">
           <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord}  totalling <span>{formattedExpensesTotal}</span></h1>
                <h1 className="page-header__subtitle">Total of expenses saved: <span>{allExpenses}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const allExpenses = state.expenses.length;
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        allExpenses,
        expensesTotal : selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);