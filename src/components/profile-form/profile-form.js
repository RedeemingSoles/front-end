import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';
import './profile-form.scss';

const defaultState = {
  organizationName: '',
  usernameDirty: false,
  usernameError: 'Organization Name is required',

  contactFirstName: '',
  contactFirstNameDirty: false,
  contactFirstNameError: 'First Name is required',

  contactLastName: '',
  contactLastNameDirty: false,
  contactLastNameError: 'Last Name is required',

  title: '',
  titleDirty: false,
  titleError: 'Title is required',

  phoneNumber: '',
  phoneNumberDirty: false,
  phoneNumberError: 'Phone Number is required',

  mailingAddress: '',
  mailingAddressDirty: false,
  mailingAddressError: 'Street Address is required',

  city: '',
  cityDirty: false,
  cityError: 'City is required',

  state: '',
  stateDirty: false,
  stateError: 'State is required',

  zipCode: '',
  zipCodeDirty: false,
  zipCodeError: 'Zip Code is required',

  country: '',
  countryDirty: false,
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : defaultState;
    autoBind.call(this, ProfileForm);
  }

  handleValidation(name, value) {
    switch (name) {
      case 'phoneNumber':
        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)) { // eslint-disable-line
          return 'Your phone number must include: \'+\'1, \'area code\', \'seven digit number, no dashes or parenthesis';
        }
        return null;
      default:
        return null;
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className="profile-form" onSubmit={this.handleSubmit}>
        <input
          name="organizationName"
          placeholder="Organization"
          type="text"
          value={this.state.organizationName}
          onChange={this.handleChange}
        />
        <input
          name="contactFirstName"
          placeholder="First Name"
          type="text"
          value={this.state.contactFirstName}
          onChange={this.handleChange}
        />
        <input
          name="contactLastName"
          placeholder="Last Name"
          type="text"
          value={this.state.contactLastName}
          onChange={this.handleChange}
        />
        <input
          name="title"
          placeholder="Title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number - '+15555555555'"
          type="text"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
        />
        <input
          name="mailingAddress"
          placeholder="Address"
          type="text"
          value={this.state.mailingAddress}
          onChange={this.handleChange}
        />
        <input
          name="city"
          placeholder="City"
          type="text"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <input
          name="state"
          placeholder="State"
          type="text"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <input
          name="zipCode"
          placeholder="Zip Code"
          type="text"
          value={this.state.zipCode}
          onChange={this.handleChange}
        />
        <input
          name="country"
          placeholder="Country"
          type="text"
          value={this.state.country}
          onChange={this.handleChange}
        />

        <button type="submit">{this.props.profile ? 'update' : 'create'} profile</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};

export default ProfileForm;
