import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as authActions from '../../actions/auth-actions';
import * as profileActions from '../../actions/profile-actions';
import autoBind from '../../utils/auto-bind';
import * as routes from '../../routes';
import '../../style/main.scss';
import './auth-landing.scss';

import AuthForm from '../auth-form/auth-form';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Landing);
  }

  handleLogin(user) {
    return this.props.login(user)
      .then(() => {
        if (JSON.parse(this.props.token).isAdmin) {
          this.props.history.push(routes.ADMIN_ROUTE);
        } else {
          this.props.history.push(routes.DASHBOARD_ROUTE);
        }
        this.props.fetchProfile();
      })
      .catch(console.error);
  }

  handleSignUp(user) {
    return this.props.signUp(user)
      .then(() => {
        this.props.history.push(routes.PROFILE_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    const signUpJSX =
      <div className="loginWrapper">
        <h2 className="loginSignup">No Kids Left On The Sideline</h2>
        <h2>Sign Up</h2>
        <AuthForm onComplete={this.handleSignUp} type="Signup"/>
        <p>Already have an account? &nbsp; &nbsp; &nbsp; &nbsp; <Link to="/login" className="linkLogin">Login</Link></p>
      </div>;

    const loginJSX =
      <div className="loginWrapper">
        <h2 className="loginSignup">No Kids Left On The Sideline</h2>
        <h2>Login</h2>
        <AuthForm onComplete={this.handleLogin} type="Login"/>
        <p>No account? &nbsp; &nbsp; &nbsp; &nbsp;<Link to="/signUp" className="linkLogin">Sign up</Link></p>
      </div>;

    const { location } = this.props;

    return (
      <div>
          { location.pathname === routes.SIGNUP_ROUTE ? signUpJSX : undefined }
          { location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined }
        <div className="landingContent">
          <div className='landingText'>It is our belief at Redeeming Soles that no child should ever be prevented
            from participating in day to day activities due to a lack of proper footwear.
            However, it happens all the time. No Kids Left on the Sidelines is a program
            designed to help provide a firm foundation for at risk youth to stand on by
            providing shoes and athletic gear to any child in need.</div>
          <div><img src="http://redeemingsoles.org/wp-content/uploads/2017/06/shutterstock_569931046-compressor.jpg" alt="" />
          </div>
        </div>
      </div>

    );
  }
}

Landing.propTypes = {
  signUp: PropTypes.func,
  login: PropTypes.func,
  fetchProfile: PropTypes.func,
  token: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(authActions.signUpRequest(user)),
  login: user => dispatch(authActions.loginRequest(user)),
  fetchProfile: () => dispatch(profileActions.fetchRequestProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
