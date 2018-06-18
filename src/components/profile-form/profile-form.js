
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';

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

  streetAddress: '',
  streetAddressDirty: false,
  streetAddressError: 'Street Address is required',

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
};

const PHONE_NUMBER_LENGTH = 12;

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : defaultState;
    autoBind.call(this, ProfileForm);
  }

  handleValidation(name, value) {
    switch (name) {
      case 'phoneNumber':
        if (value.length !== PHONE_NUMBER_LENGTH) {
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
    e.preventDefault();

    if (this.state.phoneNumberError) {
      this.setState({ phoneNumberDirty: true });
    } else {
      this.props.onComplete(this.state);
    }
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
          name="streetAddress"
          placeholder="Address"
          type="text"
          value={this.state.streetAddress}
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

{/*<select>*/}
  {/*<option value="AL">Alabama</option>*/}
  {/*<option value="AK">Alaska</option>*/}
  {/*<option value="AZ">Arizona</option>*/}
  {/*<option value="AR">Arkansas</option>*/}
  {/*<option value="CA">California</option>*/}
  {/*<option value="CO">Colorado</option>*/}
  {/*<option value="CT">Connecticut</option>*/}
  {/*<option value="DE">Delaware</option>*/}
  {/*<option value="DC">District Of Columbia</option>*/}
  {/*<option value="FL">Florida</option>*/}
  {/*<option value="GA">Georgia</option>*/}
  {/*<option value="HI">Hawaii</option>*/}
  {/*<option value="ID">Idaho</option>*/}
  {/*<option value="IL">Illinois</option>*/}
  {/*<option value="IN">Indiana</option>*/}
  {/*<option value="IA">Iowa</option>*/}
  {/*<option value="KS">Kansas</option>*/}
  {/*<option value="KY">Kentucky</option>*/}
  {/*<option value="LA">Louisiana</option>*/}
  {/*<option value="ME">Maine</option>*/}
  {/*<option value="MD">Maryland</option>*/}
  {/*<option value="MA">Massachusetts</option>*/}
  {/*<option value="MI">Michigan</option>*/}
  {/*<option value="MN">Minnesota</option>*/}
  {/*<option value="MS">Mississippi</option>*/}
  {/*<option value="MO">Missouri</option>*/}
  {/*<option value="MT">Montana</option>*/}
  {/*<option value="NE">Nebraska</option>*/}
  {/*<option value="NV">Nevada</option>*/}
  {/*<option value="NH">New Hampshire</option>*/}
  {/*<option value="NJ">New Jersey</option>*/}
  {/*<option value="NM">New Mexico</option>*/}
  {/*<option value="NY">New York</option>*/}
  {/*<option value="NC">North Carolina</option>*/}
  {/*<option value="ND">North Dakota</option>*/}
  {/*<option value="OH">Ohio</option>*/}
  {/*<option value="OK">Oklahoma</option>*/}
  {/*<option value="OR">Oregon</option>*/}
  {/*<option value="PA">Pennsylvania</option>*/}
  {/*<option value="RI">Rhode Island</option>*/}
  {/*<option value="SC">South Carolina</option>*/}
  {/*<option value="SD">South Dakota</option>*/}
  {/*<option value="TN">Tennessee</option>*/}
  {/*<option value="TX">Texas</option>*/}
  {/*<option value="UT">Utah</option>*/}
  {/*<option value="VT">Vermont</option>*/}
  {/*<option value="VA">Virginia</option>*/}
  {/*<option value="WA">Washington</option>*/}
  {/*<option value="WV">West Virginia</option>*/}
  {/*<option value="WI">Wisconsin</option>*/}
  {/*<option value="WY">Wyoming</option>*/}
  {/*<option value="AS">American Samoa</option>*/}
  {/*<option value="GU">Guam</option>*/}
  {/*<option value="MP">Northern Mariana Islands</option>*/}
  {/*<option value="PR">Puerto Rico</option>*/}
  {/*<option value="UM">United States Minor Outlying Islands</option>*/}
  {/*<option value="VI">Virgin Islands</option>*/}
  {/*</select>*/}