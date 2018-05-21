// Shallow render and FUll dom rendering tests for components
import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from '../../components/LoginPage'

test('Should render Header correctly', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot();
})

