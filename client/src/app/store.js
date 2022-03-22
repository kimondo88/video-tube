import { createStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose } from '@reduxjs/toolkit';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )
  return store;
};
