import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { Provider } from "react-redux";
import { createStore } from 'redux';
import appReducer from "./reducers/index";

const store = createStore(appReducer)
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
rootElement);