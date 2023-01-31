export const SEARCH = 'SEARCH';

export const searchRobot = (text) => {
    return {
        type: SEARCH,
        payload: text
    };
};