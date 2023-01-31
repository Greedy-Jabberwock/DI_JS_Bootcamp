export const searchTerm = (val) => {
    return {
        type: 'SEARCH',
        payload: val
    };
};

export const changeSearchTerm = (val) => {
    return {
        type: 'CHANGE',
        payload: val
    };
};