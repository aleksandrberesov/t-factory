import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FullScreen, GetUserData} from './telegram_integration';
import * as serviceWorker from './serviceWorker';

FullScreen();

ReactDOM.render(<App />, document.getElementById('root'));
document.getElementById('userinfo').innerText = GetUserData();
//const s = GetUserData();
//alert(GetUserData());
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

