import moment from 'moment'

export default [{
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