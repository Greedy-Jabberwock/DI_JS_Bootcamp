let initState = {
    header: 'Header from Redux',
    subHeader: 'Sub Header from Redux'
};

export const reducer = (state=initState, action={}) => {
    switch(action.type) {
        case 'CHANGE_HEADER':
            return {...state, header: action.payload};
        case 'CHANGE_SUBHEADER':
            return {...state, subHeader: action.payload}
        case 'SUB_TO_HEAD': 
            return {...state, header: state.subHeader}
        default:
            return {...state}
    }
};