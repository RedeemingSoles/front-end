import React from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';
import autoBind from '../../utils/auto-bind';

class AuthRedirect extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, AuthRedirect);
  }

  handleValidation() {
    return superagent.get(`${API_URL}${routes.VALIDATION_ROUTE}`)
      .set('Authorization', `Bearer ${this.props.token}`)
      .then((response) => {
        console.log('__FRONT_SET_ADMIN__', response);
        return response;
      });
  }

  render() {
    const { token, location } = this.props;
    const { pathname } = location;
    const admin = this.handleValidation();

    let destinationRoute = null;
    if (pathname === routes.LOGIN_ROUTE ||
          pathname === routes.SIGNUP_ROUTE ||
          pathname === routes.LANDING_ROUTE) {
      if (token && admin.statusCode === 200) {
        destinationRoute = routes.ADMIN_ROUTE;
      }
      if (token) {
        destinationRoute = routes.DASHBOARD_ROUTE;
      }
    } else if (!token) {
      destinationRoute = routes.LANDING_ROUTE;
    }
          
    return (
            <div>
        {
          destinationRoute ? <Redirect to={destinationRoute}/> : undefined
        }
      </div>
    );
  }
}

AuthRedirect.propTypes = {
  token: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);
