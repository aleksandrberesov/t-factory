import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FullScreen, GetUserData} from './telegram_integration';
import * as serviceWorker from './serviceWorker';

FullScreen();

ReactDOM.render(<App />, document.getElementById('root'));
document.getElementById('userinfo').innerText = GetUserData();
serviceWorker.unregister();

