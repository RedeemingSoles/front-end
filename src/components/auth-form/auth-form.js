import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import autoBind from './../../utils/auto-bind';
import './auth-form.scss';

const defaultState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is required',

  email: '',
  emailDirty: false,
  emailError: 'Email is required',

  password: '',
  passwordDirty: false,
  passwordError: 'Password is required',
};

const MIN_NAME_LENGTH = 6;
const MAX_NAME_LENGTH = 28;
const MIN_PASSWORD_LENGTH = 6;

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    autoBind.call(this, AuthForm);
  }

  handleValidation(name, value) {
    if (this.props.type === 'Login') {
      return null;
    }

    switch (name) {
      case 'username':
        if (value.length < this.MIN_NAME_LENGTH) {
          return `Username must be at least ${MIN_NAME_LENGTH} characters long.`;
        }
        if (value.length > this.MAX_NAME_LENGTH) {
          return `Username must be less than ${MAX_NAME_LENGTH} characters long.`;
        }
        return null;

      case 'email':
        if (!validator.isEmail(value)) {
          return 'Please provide a valid email';
        }
        return null;

      case 'password':
        if (value.length < this.MIN_PASSWORD_LENGTH) {
          return `Your password must be at least ${MIN_PASSWORD_LENGTH} characters long.`;
        }
        if (!/(?=[a-z])/.test(value)) {
          return 'Password must contain at least one lowercase letter.';
        }
        if (!/(?=[A-Z])/.test(value)) {
          return 'Password must contain at least one uppercase letter.';
        }
        if (!/(?=\d)/.test(value)) {
          return 'Password must contain at least one number.';
        }
        if (!/(?=\W)/.test(value)) {
          return 'Password must contain at least one special character.';
        }
        return null;

      default:
        return null;
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      usernameError, emailError, passwordError,
    } = this.state;

    if (this.props.type === 'Login' || (!usernameError && !passwordError && !emailError)) {
      this.props.onComplete(this.state);
      this.setState(defaultState);
    } else {
      this.setState({
        usernameDirty: true,
        emailDirty: true,
        passwordDirty: true,
      });
    }
  }

  render() {
    let { type } = this.props;
    type = type === 'Login' ? type : 'Signup';

    const signUpJSX =
      <div className="authContainer">
        { this.state.emailDirty ? <p>{ this.state.emailError }</p> : undefined }
        <div className="authBlock">
          <label className='authLabel'>Email</label>
          <input
            className='authInput'
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
      </div>;

    const signUpRenderJSX = (type !== 'Login') ? signUpJSX : undefined;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        { this.state.usernameDirty ? <p>{ this.state.usernameError }</p> : undefined }
        <div className="authBlock">
        <label className='authLabel'>Username</label>
          <input
            id='login'
            name='username'
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>

        {signUpRenderJSX}

        { this.state.passwordDirty ? <p>{ this.state.passwordError }</p> : undefined }
        <div className="authBlock">
        <label className='authLabel'>Password</label>
          <input
            className={ this.state.passwordDirty ? 'input-error' : '' }
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="authClearfix">
        <button id='authButton' type="submit">{type}</button>
        </div>
      </form>
    );
  }
}

AuthForm.propTypes = {
  type: PropTypes.string,
  onComplete: PropTypes.func,
};

export default AuthForm;
