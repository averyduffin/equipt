import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './../store';
import registerServiceWorker from '../registerServiceWorker';
import Main from './Templates/Main';
import Blank from './Templates/Blank';
import Facebook from './Facebook';

import Landing from './Landing';
import SignIn from './SignIn';
import './App.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Facebook />
				<Route exact path="/" render={(route) => <Main component={Landing} route={route} />} />
				<Route exacat path="/signin" render={(route) => <Blank component={SignIn} route={route} />} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
