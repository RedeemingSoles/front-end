import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import autoBind from '../../utils/auto-bind';
import ShoesDonorForm from '../shoes-donor-form/shoes-donor-form';
import * as donorShoesActions from '../../actions/donor-shoes-actions';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, Admin);
  }

  render() {
    const {
      shoeInput,
    } = this.props;

    return (
      <div className="admin">
        <h1>ADMIN</h1>
        <h3>Input Donated Shoes</h3>
        <ShoesDonorForm onComplete={shoeInput} buttonText={'Submit'}/>
      </div>
    );
  }
}

Admin.propTypes = {
  shoeInput: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  shoeInput: item => dispatch(donorShoesActions.donorShoesCreateRequest(item)),
});

export default connect(null, mapDispatchToProps)(Admin);
