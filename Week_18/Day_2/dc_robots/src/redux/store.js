import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer'
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk);
export const store = createStore(reducer, middlewares);