import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Landing from '../auth-landing/auth-landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Header from '../header/header';
import Profile from '../profile/profile';
import Admin from '../admin/admin';
import * as profileActions from '../../actions/profile-actions';

class App extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.fetchProfile()
        .catch(console.error);
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/signup" component={Landing}/>
            <Route exact path="/login" component={Landing}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/admin" component={Admin}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  fetchProfile: PropTypes.func,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(profileActions.fetchRequestProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
