import {INCREASE, DECREASE} from './actions';

const INITIAL_STATE = {
    age: 17
};

export const reducer = (state=INITIAL_STATE, action={}) => {
    switch(action.type) {
        case INCREASE:
            return {...state, age: state.age + 1};
        case DECREASE:
            return {...state, age: state.age - 1};
        default: 
            return {...state};
    };
};