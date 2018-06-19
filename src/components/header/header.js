import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth-actions';
import * as routes from '../../routes';

class Header extends React.Component {
  render() {
    const JSXNotLoggedIn =
      <ul>
        <li><Link to={routes.LANDING_ROUTE}>Home</Link></li>
        <li><Link to={routes.LOGIN_ROUTE}>Login</Link></li>
        <li><Link to={routes.SIGNUP_ROUTE}>Sign Up</Link></li>
      </ul>;

    const JSXLoggedIn =
      <ul>
        <li><Link to={routes.DASHBOARD_ROUTE}>Dashboard</Link></li>
        <li><Link to={routes.PROFILE_ROUTE}>Profile</Link></li>
      </ul>;

    return (
      <header className="header">
        <h1>Redeeming Soles</h1>
        <nav>
          { this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn }
        </nav>
        {
          this.props.loggedIn ?
            <button onClick={this.props.logout}>Logout</button>
            : undefined
        }
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
