import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/dashboard" component={ExpenseDashBoardPage}    />
            <Route path="/create" component={AddExpensePage}    />
            <Route path="/edit/:id"   component={EditExpensePage}  />
            <Route path="/help"   component={HelpPage}  />
            <Route component={NotFoundPage} />
        </Switch>
      </div>
  </Router>
);

export default AppRouter;