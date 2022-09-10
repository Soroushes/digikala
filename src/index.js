import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./containers/header";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/style.css';
import {BrowserRouter} from "react-router-dom";
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
