import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ShoesForm from '../shoes-form/shoes-form';
import * as shoesActions from '../../actions/shoes-actions';

class Dashboard extends React.Component {
  render() {
    const {
      shoesCreate,
    } = this.props;

    return (
      <div className="dashboard">
        <h3>Request some shoes!</h3>
        <ShoesForm onComplete={shoesCreate} buttonText={'Submit'}/>
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

export default connect(mapDispatchToProps)(Dashboard);
