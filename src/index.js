import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const app = (
  <HashRouter>
    <App />
  </HashRouter>
)
ReactDOM.render(app,document.getElementById('root'));


serviceWorker.unregister();
