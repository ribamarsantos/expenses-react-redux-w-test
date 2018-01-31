import { createStore } from "redux";

// action creator

const incrementCount = ({ incrementedBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementedBy
}
);

const decrementCount = ({ decrementedBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementedBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ set = 0 } = {}) => ({
    type: 'SET',
    set
});
const store = createStore((state={count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementedBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementedBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.set
            }
        default:
            return state;
    }
});

store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementedBy: 10}));


store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementedBy: 5}));

store.dispatch(incrementCount());
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ set: 100}));


