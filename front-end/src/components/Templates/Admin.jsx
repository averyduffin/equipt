import React from 'react';
import Nav from '../Nav';

const Main = ({ component }) => {
	const Component = component;
	return (
		<div>
			<Nav />
			<Component />
		</div>
	);
};

export default Main;
