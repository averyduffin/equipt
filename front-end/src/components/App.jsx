import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './../store';
import Nav from './Nav';
import SubNav from './Nav/SubNav';
import Landing from './Landing';
import './App.css';

const App = () => (
	<div className="App">
		<Nav />
		<SubNav />
		<Router>
			<Provider store={store}>
				<Route exact path="/" component={Landing} />
			</Provider>
		</Router>
	</div>
);

export default App;
