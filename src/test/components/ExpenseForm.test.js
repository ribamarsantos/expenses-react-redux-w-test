import React from 'react';
import { shallow  } from "enzyme";
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('Should render Expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render error  for invalid form submition', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'testDescription'
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
})

test('should set notes on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'my note test';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        persist: () => {}, 
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot(); 
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '123.60'
        
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '222.111'
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe('')
})