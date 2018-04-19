import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test( 'Should correctly render Expense Summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={2} />);
    expect(wrapper).toMatchSnapshot();
})


test( 'Should correctly render Expense Summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={10} expensesTotal={12131232} />);
    expect(wrapper).toMatchSnapshot();
})