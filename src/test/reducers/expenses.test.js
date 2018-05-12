import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', ()=> {
    const state = expensesReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual([]);
});

test('should remove expense by id', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
 });

 test('should not remove expenses if id not found', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
 });

 test('should add expense', () => {
    const expenseData = {
        id: '9999',
        description:'Cell phone bill',
        amount: 5500,
        createdAt: 4000,
        note: 'some note'
    };     
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseData
    }
    const state = expensesReducer(expenses, action);     
    expect(state).toEqual( [...expenses, expenseData]);
 });


 test('should edit expense', () => {
    const description = 'ssss';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);     
    expect(state[0].description).toBe(description)
 });

 test('should not edit expenses if id not found', () => {
    const description = 'ssss';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);     
    expect(state).toEqual(expenses);
 });

 test('should set expenses', () => {
     const action = {
         type: 'SET_EXPENSES',
         expenses: [ expenses[1]]
     }
     const state = expensesReducer(expenses, action);
     expect(state).toEqual([expenses[1]]);
 })