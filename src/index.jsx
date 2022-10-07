import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.min.css';
import './assets/styles/style.css';
import {BrowserRouter} from "react-router-dom";
import App from './app';
import {Provider} from "react-redux";
import store from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

);
