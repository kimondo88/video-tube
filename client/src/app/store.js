import { createStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware} from '@reduxjs/toolkit';
import createRootReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  )
  return store;
};
