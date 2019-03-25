import React from 'react';
import ReactDOM from 'react-dom';
import './CSSstyles/index.css';
import Main from './Main';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';
import * as serviceWorker from './serviceWorker';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
	<Provider store={store}>
	<Main />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
