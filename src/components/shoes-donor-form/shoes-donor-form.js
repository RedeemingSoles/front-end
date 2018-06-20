import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';

const defaultState = {

  shoeType: '',
  shoeTypeDirty: false,
  shoeTypeError: 'Shoe type is required',

  age: '',
  ageDirty: false,
  ageError: 'Age is required',

  gender: '',
  genderDirty: false,
  genderError: 'Gender is required',

  shoeSize: '',
  shoeSizeDirty: false,
  shoeSizeError: 'Shoe size is required',

  donor: '',

  error: null,
};

class ShoesDonorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.donorShoes ? props.donorShoes : defaultState;
    autoBind.call(this, ShoesDonorForm);
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
      <form className="shoes-donor-form" onSubmit={this.handleSubmit}>
        <input
          className="shoeType"
          type="text"
          name="shoeType"
          placeholder="Type of Shoe"
          value={this.state.shoeType}
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
          className="gender"
          type="text"
          name="gender"
          placeholder="Gender"
          value={this.state.gender}
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
          className="donor"
          type="text"
          name="donor"
          placeholder="Donor Name (optional)"
          value={this.state.donor}
          onChange={this.handleChange}
        />

        <button type="submit">{buttonText} shoes</button>
      </form>
    );
  }
}

ShoesDonorForm.propTypes = {
  onComplete: PropTypes.func,
  donorShoes: PropTypes.object,
  buttonText: PropTypes.string,
};

export default ShoesDonorForm;
