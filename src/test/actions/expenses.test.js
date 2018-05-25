import { startAddExpense, 
         addExpense, 
         editExpense, 
         removeExpense, 
         setExpenses, 
         startSetExpenses,
         startRemoveExpense,
         startEditExpense 
    } from '../../actions/expenses';
import configMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import  database  from '../../firebase/firebase';

const uid = 'dhfuasuidfh13213';
const defaultAuthState = { auth: { uid } };
const createMockStore = configMockStore([thunk])

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expenseData[id] = { description, note, amount, createdAt}
    });
    database.ref(`users/${uid}/expenses`).set(expenseData).then((() => done()));
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '1' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense( { id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then(snapshot => { 
        expect(snapshot.val()).toBeFalsy();
        done();
    });
                             
})

test('should setup edit expense action object', () => {
    const action = editExpense('111', { note: 'Gas bill', amount: 10});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '111',
        updates: {note: 'Gas bill', amount: 10}
    });
});

test('should edit expense on firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    const updates = {
        note:'UPDATED_BILL',
        amount: 99999
    }
    store.dispatch(startEditExpense(id,updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({ ...expenses[2], ...updates })
        done()
    })
})

test('should setup add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })

});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
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

       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
   })
})

// test('should add expense with defaults to database and store', () => {
    
// })

test('should setup add expense action object with default values', (done) => {
    const store = createMockStore(defaultAuthState);
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

       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
   })
})

test('should set up expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });   
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
})