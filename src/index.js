import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import RootStore from './Stores'

const root = new RootStore()
ReactDOM.render(
	<BrowserRouter>
    <Provider {...root}>
		  <App />
    </Provider>
	</BrowserRouter>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
