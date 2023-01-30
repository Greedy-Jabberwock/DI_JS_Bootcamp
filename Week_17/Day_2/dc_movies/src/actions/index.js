export const getFilm = (id) => {
    return {
        type: 'GET_FILM',
        payload: id
    };
};