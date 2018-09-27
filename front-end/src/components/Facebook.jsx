import React from 'react';
import { connect } from 'react-redux';
import { logPageView } from '../store/actions/stats';
import { facebookGetLoginStatus } from '../store/actions/facebook';

class Facebook extends React.Component {
	componentDidMount() {
		const { onPageView, onIsAuth } = this.props;
		onPageView();
		window.fbAsyncInit = () => {
			window.FB.init({
				appId: '481418142336480',
				xfbml: true,
				version: 'v3.1',
			});
			window.FB.AppEvents.logPageView();
			onIsAuth();
		};

		const facebook = (doc, sc, id) => {
			const fjs = doc.getElementsByTagName(sc)[0];
			if (doc.getElementById(id)) {
				return;
			}
			const js = doc.createElement(sc);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		};
		facebook(document, 'script', 'facebook-jssdk');
	}
	render() {
		return <div />;
	}
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	onPageView: () => dispatch(logPageView()),
	onIsAuth: () => dispatch(facebookGetLoginStatus()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Facebook);
