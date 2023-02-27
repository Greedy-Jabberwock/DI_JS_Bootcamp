import axios from 'axios';

export const GET_BOTS = 'GET_ROBOTS'
export const SEARCH = 'SEARCH';

export const getRobots = () => async (dispatch) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch ({
        type: GET_BOTS,
        payload: data.data
    })
}

export const searchRobot = (text) => {
    return {
        type: SEARCH,
        payload: text
    };
};