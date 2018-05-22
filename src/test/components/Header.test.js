// Shallow render and FUll dom rendering tests for components
import React from 'react'
import { shallow } from 'enzyme'
import { Header }  from '../../components/Header'

test('Should render Header correctly!', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />)
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogout on button click', () => {
    const startLogoutSpy = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogoutSpy} />)
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenLastCalledWith()
    
})
