import React from 'react';
import styled from 'react-emotion';
import Deck from './Deck';

const Landing = () => (
	<Container>
		<Deck />
		<Deck />
		<Deck />
		<Deck />
		<Deck />
	</Container>
);

export default Landing;

const Container = styled.div({
	paddingTop: '7rem',
	paddingLeft: '28px',
	paddingRight: '28px',
});
