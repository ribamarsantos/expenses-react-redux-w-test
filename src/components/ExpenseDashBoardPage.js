import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div> 
        <h1>Main Page </h1>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;