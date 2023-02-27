import {createStore, applyMiddleware} from 'redux';
import { reducer } from './reducer';
import { logAge } from './middlewares';

const middlewareEnhancer = applyMiddleware(logAge);

export const store = createStore(reducer, middlewareEnhancer);