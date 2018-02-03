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

test('should setup edit expense action object', () => {
    const action = editExpense('111', { note: 'Gas bill', amount: 10});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '111',
        updates: {note: 'Gas bill', amount: 10}
    });
});

test('should setup add expense action object', () => {
    const expenseData = {
        description:'Gas bill',
        amount: 5500,
        createdAt: 4000,
        note: 'some note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note : '',
            amount : 0,
            createdAt : 0,            
            id: expect.any(String)
        }
    })
})