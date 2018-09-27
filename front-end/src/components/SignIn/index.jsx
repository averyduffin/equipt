import React from 'react';
// import { FaFacebookF } from 'react-icons/fa';
import styled, { css } from 'react-emotion';
import { connect } from 'react-redux';
// import GOOGLE_NORMAL from './btn_google_light_normal_ios.svg';
import LOGO from './brush.svg';
import { facebookLogin } from '../../store/actions/facebook';

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

// const fbButton = css({
// 	padding: 10,
// 	fontFamily: 'Helvetica,sans-serif',
//     fontWeight: 700,
// 	color: '#fff',
//     cursor: 'pointer',
//     display: 'inline-block',
//     fontSize: 'calc(.27548vw + 12.71074px)',
//     textDecoration: 'none',
//     textTransform: 'uppercase',
//     transition: 'background-color .3s,border-color .3s',
//     backgroundColor: '#4c69ba',
//     border: 'calc(.06887vw + .67769px) solid #4c69ba',
//     // padding: calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px);
// });

// const fbLogo = css({
// 	paddingRight: 10,
// 	width: 21,
// 	height: 21,
// });

const SignIn = ({ logIn }) => (
	<Container>
		<Logo />
		<form>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<Padding>
				<button
					type="submit"
					className={`btn btn-primary ${color}`}
					onClick={() => {
						window.location.assign('/');
					}}
				>
					Start
				</button>
			</Padding>
		</form>
		<ButtonContainer>
			<button className={`btn btn-primary ${color}`} onClick={logIn}>
				{' '}
				LOGIN FACEBOOK
			</button>
		</ButtonContainer>
	</Container>
);

const mapDispatchToProps = (dispatch) => ({
	logIn: () => dispatch(facebookLogin()),
});

const mapStateToProps = () => {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignIn);

const Container = styled.div({
	backgroundColor: 'white',
	margin: 'auto',
	width: 350,
	// width: '50%',
	// border: '3px solid green',
	padding: 10,
	marginTop: 100,
	boxShadow: '1px 2px 10px #888888',
});

const ButtonContainer = styled.div({
	paddingLeft: 43,
	paddingBottom: 20,
});

const Logo = styled.div({
	background: `transparent url(${LOGO}) no-repeat`,
	backgroundSize: '100px 50px',
	height: 75,
	marginLeft: 115,
});

const Padding = styled.div({
	paddingLeft: 133,
	paddingBottom: 15,
});
