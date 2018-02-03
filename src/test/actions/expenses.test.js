import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// test('adding expense', () => {
//     const result = addExpense()
// });

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '111' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '111'
    });
});