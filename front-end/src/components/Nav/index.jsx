import React from 'react';
import { css } from 'react-emotion';
import {
	//   Collapse,
	Navbar,
	//   NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const border = css({
	backgroundColor: 'hotpink',
	'&:hover': {
		color: 'lightgreen',
	},
});

export default class Example extends React.Component {
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
					<NavbarBrand href="/">EQUIPT</NavbarBrand>
					{/* <NavbarToggler onClick={this.toggle} /> */}
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/">Signup</NavLink>
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
