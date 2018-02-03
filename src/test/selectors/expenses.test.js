import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'rent',
    amount: 195,
    createdAt: 0,
    note: ''
},{
    id: '2',
    description: 'gas',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: ''
},{
    id: '3',
    description: 'credit card',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
    note: ''
},
]
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[0]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([ expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[0],expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters);
    expect(action).toEqual([expenses[1], expenses[2],expenses[0]]);
});