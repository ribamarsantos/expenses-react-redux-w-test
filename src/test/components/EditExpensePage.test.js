import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage }from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let history, wrapper, editExpense, removeExpense, expense;

beforeEach(() => {
    expense = expenses[2]
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history  = { push: jest.fn()}
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            expense={expense} 
            history={history} 
            removeExpense={removeExpense} 
        />)    
})
test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle edit Expense Correctly', () => {
    const objUpdate = {
        id: expenses[2].id,
        description: 'editada',
        amount: '111.11',
        notes: 'my notes'
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(objUpdate)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expense.id,objUpdate)

}) 

test('should handle remove expense correctly', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id: expense.id})
})