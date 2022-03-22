import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore, { history } from './app/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>   
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
