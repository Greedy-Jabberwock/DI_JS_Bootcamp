import { ADD, EDIT, CHOOSE, DELETE, NULL_CHOOSE } from "../actions";

const INITIAL_STATE = {
    transactions: [
        { id: 151511, acc_num: '112233', FSC: '2', acc_holder: 'John Doe', amount: '1000'},
        { id: 215556, acc_num: '221133', FSC: '5', acc_holder: 'Jane Doe', amount: '3000'},
        { id: 660061, acc_num: '223311', FSC: '3', acc_holder: 'Jack Doe', amount: '5000'}   
    ],
    chosen: null
};

export const reducer = (state=INITIAL_STATE, action={}) => {
    switch (action.type) {
        case ADD:
            const trans = [...state.transactions]
            const new_record = action.payload;
            new_record['id'] = Math.floor(Math.random() * 999999);
            trans.push(new_record);
            console.log('ADD new_record: ', new_record);
            return {...state, transactions: trans};
        case CHOOSE:
            return {...state, chosen: state.transactions.find(item => item.id === action.payload)};
        case NULL_CHOOSE:
            return {...state, chosen: null};
        case EDIT:
            const copy = [...state.transactions];
            copy.map(item => {
                if (item.id === action.payload.id) {
                    const data = action.payload.data
                    item.acc_num = data.acc_num
                    item.FSC = data.FSC
                    item.acc_holder = data.acc_holder
                    item.amount = data.amount
                }
            })
            return {...state, transactions: copy};
        case DELETE:
            return {...state, transactions: state.transactions.filter(item => item.id !== action.payload)};
        default:
            return {...state};
    }
};