import { withProps } from 'recompose';
import React from 'react';
// import { FaFacebookF } from 'react-icons/fa';
import styled, { css } from 'react-emotion';
import { connect } from 'react-redux';
// import GOOGLE_NORMAL from './btn_google_light_normal_ios.svg';
import LOGO from './brush.svg';
import { facebookLogin } from '../../store/actions/facebook';
import './SignIn.css';

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
	// <Container>
	// 	<Logo />
	// 	<form>
	// 		<div className="form-group">
	// 			<label htmlFor="exampleInputEmail1">Email address</label>
	// 			<input
	// 				type="email"
	// 				className="form-control"
	// 				id="exampleInputEmail1"
	// 				aria-describedby="emailHelp"
	// 				placeholder="Enter email"
	// 			/>
	// 		</div>
	// 		<div className="form-group">
	// 			<label htmlFor="exampleInputPassword1">Password</label>
	// 			<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
	// 		</div>
	// 		<Padding>
	// 			<button
	// 				type="submit"
	// 				className={`btn btn-primary ${color}`}
	// 				onClick={() => {
	// 					window.location.assign('/');
	// 				}}
	// 			>
	// 				Start
	// 			</button>
	// 		</Padding>
	// 	</form>
	// 	<ButtonContainer>
	// 		<button className={`btn btn-primary ${color}`} onClick={logIn}>
	// 			{' '}
	// 			LOGIN FACEBOOK
	// 		</button>
	// 	</ButtonContainer>
	// </Container>
	<Container>
		<FormSignIn>
			<Image />
			<button className={`btn btn-primary ${color}`} onClick={logIn}>
				{' '}
				LOGIN FACEBOOK
			</button>
			<Title>Please sign in</Title>
			<Label>Email address</Label>
			<Input type="email" id="inputEmail" placeholder="Email address" required />
			<Label>Password</Label>
			<Input type="password" id="inputPassword" placeholder="Password" required />
			<CheckBoxContainer>
				<label>
					<Checkbox /> Remember me
				</label>
			</CheckBoxContainer>
			<button className="btn btn-lg btn-primary btn-block" type="submit">
				Sign in
			</button>
			<Copyright>&copy; 2017-2018</Copyright>
		</FormSignIn>
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
	paddingTop: 100,
	textAlign: 'center',
});

const FormSignIn = withProps()(
	styled.form({
		width: 300,
		maxWidth: 330,
		padding: 15,
		margin: '0 auto',
	})
);

const Image = withProps({
	className: 'mb-4',
	src: LOGO,
	alt: '',
	width: '72',
	height: '72',
})(styled.form({}));
const Title = withProps({ className: 'h3 mb-3 font-weight-normal' })(styled.h1({}));
const Label = withProps({ className: 'sr-only' })(styled.label({}));
const Input = withProps({ className: 'form-control' })(
	styled.input(({ password }) => ({
		position: 'relative',
		boxSizing: 'border-box',
		height: 'auto',
		padding: 10,
		fontSize: 16,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		marginBottom: password ? 10 : -1,

		':focus': {
			zIndex: '2',
		},
	}))
);
const CheckBoxContainer = withProps({ className: 'mb-3' })(
	styled.div({
		fontWeight: '400',
	})
);
const Copyright = withProps({ className: 'mt-5 mb-3 text-muted' })(styled.div({}));
const Checkbox = withProps({ type: 'checkbox' })(styled.input({}));

// const ButtonContainer = styled.div({
// 	paddingLeft: 43,
// 	paddingBottom: 20,
// });

// const Logo = styled.div({
// 	background: `transparent url(${LOGO}) no-repeat`,
// 	backgroundSize: '100px 50px',
// 	height: 75,
// 	marginLeft: 115,
// });

// const Padding = styled.div({
// 	paddingLeft: 133,
// 	paddingBottom: 15,
// });
