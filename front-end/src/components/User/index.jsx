import React from 'react';
import styled from 'react-emotion';
import Posting from './Posting';

// This page should have the layout for the users settings
const UserLayout = () => (
	<Container>
		<Posting />
	</Container>
);

export default UserLayout;

const Container = styled.div({
	paddingTop: '4rem',
	paddingLeft: '28px',
	paddingRight: '28px',
});
