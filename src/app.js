import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  AppRouter, { history } from './routers/AppRouter';
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

let hasRenderApp = false;

const renderApp = () =>{
    if(!hasRenderApp) {
        ReactDOM.render(<App />, document.getElementById('app'))
        hasRenderApp = true;
    }

}
ReactDOM.render(<h1>Loading... </h1>,document.getElementById('app'));
    
firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(startSetExpenses())
             .then(() => renderApp());
        if( history.location.pathname === '/') {
            history.push('/dashboard')
        }
    } else{
        renderApp();
        history.push('/')
    }
})