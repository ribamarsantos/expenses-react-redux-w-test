import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', note:'JAN/2018', amount: 4100, createdAt: 125}));
store.dispatch(addExpense({description: 'Gas Bill', note:'JAN/2018', amount: 5000, createdAt: 125}));
 //store.dispatch(setTextFilter('wa'));

// setTimeout(() =>{
//     store.dispatch(setTextFilter('water'));
// }, 3000);

 const state = store.getState();
 const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
 console.log(visibleExpense);

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<App />, document.getElementById('app'));
