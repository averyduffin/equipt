import React from 'react';
import Nav from '../Nav';
import SubNav from '../Nav/SubNav';

const Main = ({ component }) => {
	const Component = component;
	return (
		<div>
			<Nav />
			<SubNav />
			<Component />
		</div>
	);
};

export default Main;
