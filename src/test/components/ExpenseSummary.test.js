import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test( 'Should render Expense Summary correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenses = {[expenses[0]]} total = {expenses[0].amount}  />);
    expect(wrapper).toMatchSnapshot();
})
