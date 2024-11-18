import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/fonts.css';
import './style/reset.css';
import './style/style.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './toolkitRedux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store} >
		<App />
	</Provider>
);