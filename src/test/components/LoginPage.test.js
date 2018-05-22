import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage }  from '../../components/LoginPage'

test('Should render LoginPage correctly!', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />)
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogin on button click', () => {
    const startLogintSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogintSpy} />)
    wrapper.find('button').simulate('click');
    expect(startLogintSpy).toHaveBeenLastCalledWith()
    
})