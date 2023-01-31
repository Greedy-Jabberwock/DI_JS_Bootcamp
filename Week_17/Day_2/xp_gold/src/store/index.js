import { combineReducers } from 'redux';
import { articleReducer } from '../reducers/articleReducer';
import { searchReducer } from '../reducers/searchReducer';
import { createStore } from 'redux';

export default createStore(combineReducers({
    searchReducer, 
    articleReducer
}));