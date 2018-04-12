import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

const total = selectExpensesTotal(expenses);
console.log(total);