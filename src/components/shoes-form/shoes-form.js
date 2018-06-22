import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';
import './shoes-form.scss';

const defaultState = {
  childName: '',

  shoeType: '',
  shoeTypeDirty: false,
  shoeTypeError: 'Shoe type is required',

  gender: '',
  genderDirty: false,
  genderError: 'Gender is required',

  age: '',
  ageDirty: false,
  ageError: 'Age is required',

  shoeSize: '',
  shoeSizeDirty: false,
  shoeSizeError: 'Shoe size is required',

  message: '',
  messageDirty: false,

  error: null,
};

class ShoesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.requestItem ? this.props.requestItem : defaultState;
    autoBind.call(this, ShoesForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onComplete } = this.props;
    const result = onComplete(this.state);
    this.setState(defaultState);

    if (result instanceof Promise) {
      result
        .then(() => {
          this.setState(defaultState);
        })
        .catch((error) => {
          console.error('FORM ERROR', error);
          this.setState({ error });
        });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { buttonText } = this.props;
    return (
      <div className="container">
        <form className="shoes-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label>Child Name</label>
            </div>
            <div className="col-75">
              <input
                className="childName"
                type="text"
                name="childName"
                placeholder="Child Name (optional)"
                value={this.state.childName}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Shoe Type</label>
            </div>
            <div className="col-75">
              <select
                list="sports"
                className="shoeType"
                type="text"
                name="shoeType"
                required
                value={this.state.shoeType}
                onChange={this.handleChange}
              >
                <option disabled="true" value="">select</option>
                <option value="Baseball">Baseball</option>
                <option value="Basketball">Basketball</option>
                <option value="Bowling">Bowling</option>
                <option value="Cross Country">Cross Country</option>
                <option value="Football">Football</option>
                <option value="Golf">Golf</option>
                <option value="Soccer">Soccer</option>
                <option value="Softball">Softball</option>
                <option value="Tennis">Tennis</option>
                <option value="Track">Track</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Wrestling">Wrestling</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Gender</label>
            </div>
            <div className="col-75">
              <select
                list="gender"
                className="gender"
                type="text"
                name="gender"
                required
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <option disabled="true" value="">select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="N/A">N/A</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Age</label>
            </div>
            <div className="col-75">
              <select
                list="age"
                type="text"
                name="age"
                required
                value={this.state.age}
                onChange={this.handleChange}
              >
                <option disabled="true" value="">select</option>
              <option value="Youth">Youth</option>
              <option value="Adult">Adult</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Shoe Size</label>
            </div>
            <div className="col-75">
              <select
                className="shoeSize"
                list="shoeSize"
                type="number"
                min="0"
                step="0.1"
                name="shoeSize"
                required
                value={this.state.shoeSize}
                onChange={this.handleChange}
              >
                <option disabled="true" value="">select</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="10.5">10.5</option>
                <option value="11">11</option>
                <option value="11.5">11.5</option>
                <option value="12">12</option>
                <option value="12.5">12.5</option>
                <option value="13">13</option>
                <option value="13.5">13.5</option>
                <option value="14">14</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Message</label>
            </div>
            <div className="col-75">
              <input
              className="message"
              type="text"
              name="message"
              placeholder="Message (optional)"
              value={this.state.message}
              onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <button className="authButton" type="submit" onClick={this.handleSubmit} >{buttonText} shoes</button>
          </div>
        </form>
      </div>
    );
  }
}

ShoesForm.propTypes = {
  onComplete: PropTypes.func,
  requestItem: PropTypes.object,
  buttonText: PropTypes.string,
};

export default ShoesForm;
