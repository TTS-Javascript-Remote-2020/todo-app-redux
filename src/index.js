import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

// Thunk allows us to use async functions as actions, instead of plain objects
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();

serviceWorker.unregister();
