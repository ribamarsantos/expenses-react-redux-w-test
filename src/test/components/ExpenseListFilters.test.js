import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, setStartDate, setEndDate, setSortBy, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setSortBy = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setSortBy={setSortBy}
        />
    )
})

test('Render ExpenseListFilter correectly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseListFilter with data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});