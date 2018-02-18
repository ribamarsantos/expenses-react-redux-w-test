// Shallow render and FUll dom rendering tests for components
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('Should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot(); // compare with the first snapshot
})

