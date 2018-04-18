import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

// const total = selectExpensesTotal(expenses);
// console.log(total);

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0)
});

test('should correctly add up a single expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toEqual(expenses[0].amount)
})

test('should correctly add up multiples expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toEqual(114195)
})