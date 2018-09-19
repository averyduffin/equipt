import { createStore, compose } from 'redux';
import reducers from './reducers';
import middleware from './middleware';

/* eslint-disable */
const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
/* eslint-enable */

const store = createStore(reducers, composeEnhancers(middleware));

export default store;
