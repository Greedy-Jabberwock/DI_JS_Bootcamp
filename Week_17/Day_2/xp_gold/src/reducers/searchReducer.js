const initialState = {
    search: ''
};

export const searchReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case 'CHANGE':
            return {...state, search: action.payload.toLowerCase() };
        default:
            return {...state};
        }
};