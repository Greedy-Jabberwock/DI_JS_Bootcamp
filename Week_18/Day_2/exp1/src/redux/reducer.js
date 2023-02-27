import {
    INCR, 
    DECR,
    INCR_ODD
} from './actions';

const initialState = {
    count: 0
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {

        case INCR: 
            return {...state, count: state.count + 1};

        case DECR:
            return {...state, count: state.count - 1};

        case INCR_ODD:
            if (state.count % 2)
                return {...state, count: state.count + 1};
            return {...state}

        default: return {...state};
    };
}