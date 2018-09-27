import React from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
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
import { faceBookLogOut } from '../../store/actions/facebook';

class Navigation extends React.Component {
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
		const { authenticated, photoUrl, signOut } = this.props;
		console.log(photoUrl);
		return (
			<div>
				<Navbar color="white" fixed="top" light expand="md">
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
							<NavLink href={authenticated ? '/signIn' : '/'} onClick={authenticated ? null : signOut}>
								{authenticated ? 'Sign out' : 'Login'}
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(faceBookLogOut()),
});

const mapStateToProps = ({ auth, facebook }) => ({
	photoUrl: facebook.photo,
	authenticated: auth.loggedIn,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navigation);
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
