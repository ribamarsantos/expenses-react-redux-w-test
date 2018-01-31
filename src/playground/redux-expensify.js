import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
// Actions
// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


// EDIT_EXPENSE

const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// action for filter

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// 0 - default states for expenses

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// 1 - create reducer 

const expensesReducer = ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return [
                state.filter(({ id }) => action.id !== id) // todos expenses diferente do id passado na action
            ];
            break;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            })
            break;
        default:
            return state;
    }
}
const filterReducer = (state = filtersReducerDefaultState, action) =>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_DATE':
          return {
              ...state,
              sortBy: 'date'
          }
        case 'SORT_BY_AMOUNT':
          return {
              ...state,
              sortBy: 'amount'
          }
        case 'SET_START_DATE':
           return {
              ...state,
              startDate: action.startDate
           }; 
        case 'SET_END_DATE':
           return {
              ...state,
              endDate: action.endDate
           };                     
        default:
            return state;
    }
}

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return  startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if( sortBy === 'date') { 
        return a.createdAt < b.createdAt ? 1 : -1 
        } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
        }
    });   
}
// 2 - insert reducer in the store with combineReducers

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer

}));

// 3 - just checking the current state of store

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpense);
});

// 4 - dispatch an ACTION 
const expenseOne = store.dispatch(addExpense({ description:'CELPE', note: 'JAN/2018', amount: 300, createdAt: -100000}));
const expenseTwo = store.dispatch(addExpense({ description:'NETFLIX', note: 'JAN/2018', amount: 100, createdAt: -100000}));
// const expenseThree = store.dispatch(addExpense({ description:'COMPESA', note: 'JAN/2018', amount: 4100}));
// const expenseFour = store.dispatch(addExpense({ description:'TIM', note: 'JAN/2018', amount: 5000}));

// store.dispatch(editExpense(expenseOne.expense.id, { description: 'Conta de luz', note:'DEZ/2017', amount: 11700}));

// store.dispatch(setTextFilter('CELPE'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(125));
 // store.dispatch(setTextFilter('e'));
// store.dispatch(setStartDate());
 // store.dispatch(setEndDate(999));
//store.dispatch(removeExpense({id: expenseThree.expense.id}));
// const user = {
//     name: 'Ribamar',
//     age: 28
// }

// console.log({
//     ...user
// })