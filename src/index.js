import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(Reducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
window.store = store;


console.log(store.getState());
store.subscribe(() =>
  console.log(store.getState())
)