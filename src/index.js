import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App';
import * as serviceWorker from '../utilities/serviceWorker';

const app = <App />;
const root = document.getElementById('root');
render(app, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
