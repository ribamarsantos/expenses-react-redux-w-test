import React from 'react'
import { shallow } from 'enzyme'
import { LoadingPage }  from '../../components/LoadingPage'

test('Should render LoadingPage correctly!', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot();
})