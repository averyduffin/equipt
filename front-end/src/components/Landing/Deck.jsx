import React from 'react';
import styled from 'react-emotion';
import Card from './Card';

const Deck = () => (
	<Container className="card-deck">
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	</Container>
);

export default Deck;

const Container = styled.div({
	paddingTop: '1rem',
});
