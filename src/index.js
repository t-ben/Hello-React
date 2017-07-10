import 'babel-polyfill';    //fill for missing things in babel
import React from 'react';
import {render} from 'react-dom';
import App from"./components/app"
// import configureStore from './store/configureStore';
// import {Provider} from 'react-redux';   
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';

render(
    <App/>,
    document.getElementById('app')
);