import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import { startSetExpenses, startRemoveExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
// store.dispatch(startRemoveExpense({id: '-LCKqpEERcW6RWDBW0BD'}));

ReactDOM.render(<h1>Loading... </h1>,document.getElementById('app'));
    store.dispatch(startSetExpenses()
    ).then(() => ReactDOM.render(<App />, document.getElementById('app')));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log(user)
        console.log('log in')
    } else{
        console.log('log out')
    }
})