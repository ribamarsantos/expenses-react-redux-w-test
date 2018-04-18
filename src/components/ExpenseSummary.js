import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpenseSummary = (props ) => (
    <div>
        Viewing {props.expenses.length} totalling { numeral(props.total/100).format('$0,0.00')}
    </div>

)

const mapStateToProps = (state) => {

    return {
        expenses: selectExpenses(state.expenses, state.filters),
        total : selectExpensesTotal(selectExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpenseSummary);