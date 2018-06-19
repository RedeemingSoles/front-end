import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';

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

  error: null,
};

class ShoesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.shoes ? props.shoes : defaultState;
    autoBind.call(this, ShoesForm);
  }

  // componentDidUpdate(previousProps) {
  //   if (previousProps.shoes !== this.props.shoes) {
  //     this.setState(this.props.shoes);
  //   }
  // }

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
      <form className="shoes-form" onSubmit={this.handleSubmit}>
        <input
          className="childName"
          type="text"
          name="childName"
          placeholder="Child Name (optional)"
          value={this.state.childName}
          onChange={this.handleChange}
        />

        <input
          className="shoeType"
          type="text"
          name="shoeType"
          placeholder="Shoe Type"
          value={this.state.shoeType}
          onChange={this.handleChange}
        />

        <input
          className="gender"
          type="text"
          name="gender"
          placeholder="Gender"
          value={this.state.gender}
          onChange={this.handleChange}
        />

        <input
          className="age"
          type="text"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChange}
        />

        <input
          className="shoeSize"
          type="number"
          name="shoeSize"
          placeholder="Shoe Size"
          value={this.state.shoeSize}
          onChange={this.handleChange}
        />

        <input
          className="message"
          type="text"
          name="message"
          placeholder="Message (optional)"
          value={this.state.message}
          onChange={this.handleChange}
        />

        <button type="submit">{buttonText} shoes</button>
      </form>
    );
  }
}

ShoesForm.propTypes = {
  onComplete: PropTypes.func,
  shoes: PropTypes.object,
  buttonText: PropTypes.string,
};

export default ShoesForm;
