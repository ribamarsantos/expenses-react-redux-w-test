import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage }from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let wrapper, onSubmit, expense;

beforeEach(() => {
    expense = expenses[2]
    onSubmit = jest.fn()
    wrapper = shallow(<EditExpensePage onSubmit={onSubmit} expense={expense} />)    
})
test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})