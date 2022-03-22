import counterReducer from '../features/counter/counterSlice';
import navbarReducer from '../features/navbar/navbarSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

/** createRootReducer combining reducers: router, navbar and counter
 * 
 * @param {*} history 
 * @returns combineReducers  with reducers: router, navbar, counter
 */

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    navbar: navbarReducer,
    counter: counterReducer
});

export default createRootReducer;