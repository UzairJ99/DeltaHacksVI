import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomePage from './components/WelcomePage.js';
import RiderFormPage from './components/RiderFormPage.js';
import DriverFormPage from './components/DriverFormPage.js';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/RegisterPage.js';
import AuthenticationPage from './components/AuthenticationPage.js';
import Directions from './components/Directions.js';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

ReactDOM.render(<AuthenticationPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
