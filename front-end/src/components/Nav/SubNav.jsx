import React from 'react';
import { css } from 'react-emotion';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const border = css({
	top: 56,
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
			<Navbar className={border} color="light" fixed="top" light expand="md">
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/">Signup</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/">Login</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

// const Container = styled.div({
//     marginTop: 100,
// });
