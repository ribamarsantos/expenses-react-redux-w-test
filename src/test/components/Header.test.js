// Shallow render and FUll dom rendering tests for components
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').text()).toBe('Expensify ');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); // compare with the first snapshot
})

