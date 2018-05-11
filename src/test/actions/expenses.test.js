import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import configMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import  database  from '../../firebase/firebase';

const createMockStore = configMockStore([thunk])
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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })

});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'ticket',
        amount: 7999,
        note: 'winnipeg',
        createdAt: 4444
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseData
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
   })
})

// test('should add expense with defaults to database and store', () => {
    
// })

test('should setup add expense action object with default values', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    
    store.dispatch(startAddExpense({})).then(() => {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseDefaults
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
   })
})