export const ADD = 'ADD'
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';
export const CHOOSE = 'CHOOSE';
export const NULL_CHOOSE = 'NULL_CHOOSE'

export const addTransaction = (data) => {
    return {
        type: ADD,
        payload: data
    }
}

export const editTransaction = (id, data) => {
    return {
        type: EDIT,
        payload: {
            id,
            data
        }
    };
};

export const deleteTransaction = (id) => {
    return {
        type: DELETE,
        payload: id
    }
};

export const chooseTransaction = (id) => {
    return {
        type: CHOOSE,
        payload: id
    }
};

export const nullChosen = () => {
    return {
        type: NULL_CHOOSE
    }
}