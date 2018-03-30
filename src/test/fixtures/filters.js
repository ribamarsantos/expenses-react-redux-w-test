import moment from 'moment'

const filters = {
    text: '',
    sortby: 'date',
    startDate: undefined,
    endDate: undefined
};


const altFilters = {
    text: 'bill',
    sortby: 'amount',
    startDate: moment(0),
    endDate: moment().add(3,'days')
};

export { filters, altFilters };