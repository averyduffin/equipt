import React from 'react';
import styled, { css } from 'react-emotion';
import {
	//   Collapse,
	Navbar,
	//   NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

import LOGO from './brush.svg';

const border = css({
	backgroundColor: 'hotpink',
	'&:hover': {
		color: 'lightgreen',
	},
});

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<div>
				<Navbar color="white" className={border} fixed="top" light expand="md">
					<NavbarBrand href="/">
						<Logo>
							<Padding>EQUIPT</Padding>
						</Logo>
					</NavbarBrand>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/">Post Stuff</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/">Login</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

// 00F0C8

const Logo = styled.div({
	background: `transparent url(${LOGO}) no-repeat`,
	backgroundSize: '30px 30px',
	height: 30,
});

const Padding = styled.div({
	paddingLeft: 40,
	color: 'rgba(0,0,0,.5)',
});
