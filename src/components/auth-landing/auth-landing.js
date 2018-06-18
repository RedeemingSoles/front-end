import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as authActions from '../../actions/auth-actions';
import * as profileActions from '../../actions/profile-actions';
import autoBind from '../../utils/auto-bind';
import * as routes from '../../routes';

import AuthForm from '../auth-form/auth-form';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Landing);
  }

  handleLogin(user) {
    return this.props.login(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
        this.props.fetchProfile();
      })
      .catch(console.error);
  }

  handleSignUp(user) {
    return this.props.signUp(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    const signUpJSX =
      <div>
        <h2>Sign Up</h2>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
        <AuthForm onComplete={this.handleSignUp} type="Signup"/>
      </div>;

    const loginJSX =
      <div>
        <h2>Login</h2>
        <p>No account?</p>
        <Link to="/signUp">Signup</Link>
        <AuthForm onComplete={this.handleLogin} type="Login"/>
      </div>;

    const { location } = this.props;

    return (
      <div className="landing">
        { location.pathname === routes.SIGNUP_ROUTE ? signUpJSX : undefined }
        { location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined }
      </div>
    );
  }
}

Landing.propTypes = {
  signUp: PropTypes.func,
  login: PropTypes.func,
  fetchProfile: PropTypes.func,
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