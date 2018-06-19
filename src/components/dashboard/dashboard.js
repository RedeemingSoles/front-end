import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import uuid from 'uuid';
import autoBind from '../../utils/auto-bind';
import ShoesForm from '../shoes-form/shoes-form';
import ShoesList from '../shoe-list/shoe-list';
import ShoesDonorForm from '../shoes-donor-form/shoes-donor-form';
import * as shoesActions from '../../actions/shoes-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      error: null,
    };

    autoBind.call(this, Dashboard);
  }

  handleAddShoes(shoes) {
    if (shoes.shoeType === '') {
      return this.setState({ error: true });
    }

    shoes.createdOn = new Date();

    return this.setState((previousState) => {
      return {
        shoes: [...previousState.shoes, { ...shoes, id: uuid() }],
        error: null,
      };
    });
  }

  handleRemoveShoes(shoesToRemove) {
    return this.setState((previousState) => {
      return {
        shoess: previousState.shoess.filter(shoes =>
          shoes.id !== shoesToRemove.id),
      };
    });
  }

  handleUpdateShoes(shoesToUpdate) {
    return this.setState((previousState) => {
      return {
        shoes: previousState.shoes.map(shoes =>
          (shoes.id === shoesToUpdate.id ? shoesToUpdate : shoes)),
      };
    });
  }

  render() {
    const {
      shoesCreate,
    } = this.props;

    return (
      <div className="dashboard">
        <h3>Request Some Shoes</h3>
        <p> All Shoe Requests: </p>
        <ShoesList
        shoes={this.state.shoes}
        handleRemoveShoes={this.handleRemoveShoes}
        handleUpdateShoes={this.handleUpdateShoes}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
        <ShoesForm onComplete={shoesCreate} buttonText={'Request'}/>
        <h3>Input Donated Shoes</h3>
        <ShoesDonorForm onComplete={shoesCreate} buttonText={'Submit'}/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  shoesCreate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  shoesCreate: shoes => dispatch(shoesActions.shoesCreateRequest(shoes)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
