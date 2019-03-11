import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers'
import store from '../src/redux/store'
import './index.css';
import App from './App';


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )