import uuid from 'uuid';
import database from '../firebase/firebase'
// Actions
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { 
            description = '', 
            createdAt = 0, 
            amount = 0, 
            note = ''
        } = expenseData;

        const expense = { description, note, amount, createdAt};

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;        
        return database.ref(`users/${uid}/expenses/${id}`)
                                     .remove()
                                     .then(() => dispatch(removeExpense({id})));
    } 
        
}
// EDIT_EXPENSE

export const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        
        return database.ref(`users/${uid}/expenses/${id}`)
                                 .update({...updates})
                                 .then(snapshot => dispatch(editExpense(id,updates))); 
    }
        
      
}
//SET_EXPENSES
 export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
         return database.ref(`users/${uid}/expenses`).once('value', snapshot => {
            const expenses = [];

            snapshot.forEach((expense) => {
                expenses.push({
                    id: expense.key,
                    ...expense.val()
                })
            })
            dispatch(setExpenses(expenses));
        });
    };
};
