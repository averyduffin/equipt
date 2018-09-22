import React from 'react';
import styled, { css } from 'react-emotion';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Dropdown from './Dropdown';

const border = css({
	top: 56,
});

const color = css({
	color: '#00F0C8',
	backgroundColor: 'transparent',
	borderColor: '#00F0C8',
	':hover': {
		color: '#fff',
		backgroundColor: '#00F0C8',
		borderColor: '#00F0C8',
	},
	':active': {
		color: '#fff!important',
		backgroundColor: '#00F0C8!important',
		borderColor: '#00F0C8!important',
	},
	':focus': {
		boxShadow: '0 0 0 0.2rem rgba(210,251,241,.5)!important',
	},
});

const NavContainer = styled.div({
	backgroundColor: 'green',
});

export default class SubNav extends React.Component {
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
			<Navbar className={border} color="white" fixed="top" light expand="md">
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Dropdown />
						</NavItem>
						<NavItem>
							<form className="form-inline">
								<input
									className="form-control mr-sm-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button className={`btn btn-outline-success my-2 my-sm-0 ${color}`} type="submit">
									Search
								</button>
							</form>
						</NavItem>
					</Nav>
				</Collapse>
				<NavContainer />
			</Navbar>
		);
	}
}
