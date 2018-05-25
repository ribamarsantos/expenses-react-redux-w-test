import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage}    />
            <PrivateRoute path="/create" component={AddExpensePage}    />
            <PrivateRoute path="/edit/:id"   component={EditExpensePage}  />
            <Route component={NotFoundPage} />
        </Switch>
      </div>
  </Router>
);

export default AppRouter;