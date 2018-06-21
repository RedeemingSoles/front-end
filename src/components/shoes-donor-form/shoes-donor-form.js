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
          list="sports"
          name="shoeType"
          placeholder="Type of Shoe"
          value={this.state.shoeType}
          onChange={this.handleChange}
        />

        <datalist id="sports">
          <option value="Baseball"/>
          <option value="Basketball"/>
          <option value="Bowling"/>
          <option value="Cross Country"/>
          <option value="Football"/>
          <option value="Golf"/>
          <option value="Soccer"/>
          <option value="Softball"/>
          <option value="Tennis"/>
          <option value="Track"/>
          <option value="Volleyball"/>
          <option value="Wrestling"/>
          <option value="Other"/>
        </datalist>

        <input
          className="age"
          type="text"
          list="age"
          name="age"
          placeholder="Age Type"
          value={this.state.age}
          onChange={this.handleChange}
        />

        <datalist id="age">
          <option value="Youth"/>
          <option value="Adult"/>
        </datalist>

        <input
          className="gender"
          list="gender"
          type="text"
          name="gender"
          placeholder="Gender"
          value={this.state.gender}
          onChange={this.handleChange}
        />

        <datalist id="gender">
          <option value="Female"/>
          <option value="Male"/>
          <option value="N/A"/>
        </datalist>

        <input
          className="shoeSize"
          type="number"
          list="shoeSize"
          step="0.1"
          name="shoeSize"
          placeholder="Shoe Size"
          value={this.state.shoeSize}
          onChange={this.handleChange}
        />

        <datalist id="shoeSize">
          <option value="16"/>
          <option value="15"/>
          <option value="14"/>
          <option value="13"/>
          <option value="12"/>
          <option value="11.5"/>
          <option value="11"/>
          <option value="10.5"/>
          <option value="10"/>
          <option value="9.5"/>
          <option value="9"/>
          <option value="8.5"/>
          <option value="8"/>
          <option value="7.5"/>
          <option value="7"/>
          <option value="6.5"/>
          <option value="6"/>
          <option value="5.5"/>
          <option value="5"/>
          <option value="4.5"/>
          <option value="4"/>
          <option value="3.3"/>
          <option value="3"/>
          <option value="2.5"/>
          <option value="2"/>
          <option value="1.5"/>
          <option value="1"/>
        </datalist>

        <input
          className="donor"
          type="text"
          name="donor"
          placeholder="Donor Name (optional)"
          value={this.state.donor}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <button type="submit">{buttonText} shoes</button>
        <br/>
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
