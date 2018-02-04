import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducers from './reducers';

const Store = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store = { Store(reducers) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
