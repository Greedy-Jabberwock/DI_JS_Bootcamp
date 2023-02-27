import { GET_BOTS, SEARCH } from "./actions";

const INITIAL_STATE = {
    robots: [],
    search: ''
};

export const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOTS: 
            return {...state, robots: action.payload}
        case SEARCH:
            return {...state, search: action.payload }
        default:
            return {...state};
    }
};