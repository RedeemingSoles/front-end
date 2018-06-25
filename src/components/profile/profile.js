import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as profileActions from '../../actions/profile-actions';
import * as routes from '../../routes';

import autoBind from '../../utils/auto-bind';
import ProfileForm from '../profile-form/profile-form';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    autoBind.call(this, Profile);
  }

  handleCreate(profile) {
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      });
  }

  handleUpdate(profile) {
    this.props.profileUpdate(profile);
    this.setState({ editing: false });
  }

  componentDidMount() {
    this.props.profileFetch()
      .catch(console.error);
  }

  render() {
    const { profile } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null;
    
    if (profile) {
      JSXEditing =
        <div>
          <br/>
          <ProfileForm profile={profile} onComplete={this.handleUpdate}/>
          <button className="authButton" onClick={() => this.setState({ editing: false })}>Cancel</button>
          <br/>
        </div>;

      JSXDisplay =
        <div>
          <br/>
          <button className="authButton" onClick={() => this.setState({ editing: true })}>Edit</button>
          <br/>
        </div>;

      JSXProfile =
        <div>
          <p className='pProfile'>
            <span className='key'>Username</span>
            <span className='value'>{profile.contactFirstName} {profile.contactLastName}</span>
          </p>
          <p className='pProfile'>
            <span className='key'>Title</span>
            <span className='value'>{profile.title}</span></p>
          <p className='pProfile'>
            <span className='key'>Organization </span>
            <span className='value'>{profile.organizationName}</span></p>
          <p className='pProfile'>
            <span className='key'>Address</span>
            <span className='value'>{profile.mailingAddress},
            {profile.city}, {profile.state} {profile.zipCode}
            </span></p>
          <p className='pProfile'>
            <span className='key'>Phone Number</span>
            <span className='value'>{profile.phoneNumber}</span>
          </p>
          {this.state.editing ? JSXEditing : JSXDisplay}
        </div>;
    }

    return (
      <div className="profile">
        <h1>Profile</h1>
        {
          profile ? JSXProfile : <ProfileForm onComplete={this.handleCreate}/>
        }
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  profileCreate: PropTypes.func,
  profileUpdate: PropTypes.func,
  profileFetch: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(profileActions.createRequestProfile(profile)),
  profileUpdate: profile => dispatch(profileActions.updateRequestProfile(profile)),
  profileFetch: () => dispatch(profileActions.fetchRequestProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
