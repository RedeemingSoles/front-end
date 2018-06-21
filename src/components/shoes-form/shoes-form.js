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
    this.state = this.props.shoes ? this.props.shoes : defaultState;
    autoBind.call(this, ShoesForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onComplete } = this.props;
    const result = onComplete(this.state);

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
              <input
                list="sports"
                className="shoeType"
                type="text"
                name="shoeType"
                placeholder="Shoe Type"
                value={this.state.shoeType}
                onChange={this.handleChange}
              />
            </div>
          </div>
          
          <datalist id="sports">
            <option value="Baseball"/>
            <option value="Basketball"/>
            <option value="Football"/>
            <option value="Soccer"/>
            <option value="Track"/>
            <option value="Other"/>
          </datalist>

          <div className="row">
            <div className="col-25">
              <label>Gender</label>
            </div>
            <div className="col-75">
              <input
                list="gender"
                className="gender"
                type="text"
                name="gender"
                placeholder="Gender"
                value={this.state.gender}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <datalist id="gender">
            <option value="Female"/>
            <option value="Male"/>
            <option value="Other"/>
          </datalist>

          <div className="row">
            <div className="col-25">
              <label>Age</label>
            </div>
            <div className="col-75">
              <input
                className="age"
                type="number"
                name="age"
                placeholder="Age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Shoe Size</label>
            </div>
            <div className="col-75">
              <input
                className="shoeSize"
                type="number"
                name="shoeSize"
                placeholder="Shoe Size"
                value={this.state.shoeSize}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Message (optional)</label>
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
            <button className="formButton" type="submit" onClick={this.handleSubmit} >{buttonText} shoes</button>
          </div>
        </form>
      </div>
    );
  }
}

ShoesForm.propTypes = {
  onComplete: PropTypes.func,
  shoes: PropTypes.object,
  buttonText: PropTypes.string,
};

export default ShoesForm;
