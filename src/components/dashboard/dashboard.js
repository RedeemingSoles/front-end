import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Account from './account';
import ShoesForm from '../shoes-form/shoes-form';
import ShoesDonorForm from '../shoes-donor-form/shoes-donor-form';
import * as shoesActions from '../../actions/shoes-actions';
import * as routes from "../../routes";

class Dashboard extends React.Component {
  render() {
    const {
      shoesCreate,
    } = this.props;

    const JSXAdminView =
        <div>
        <h3>Request some shoes!</h3>
        <ShoesForm onComplete={shoesCreate} buttonText={'Submit'}/>
          <ShoesDonorForm onComplete={shoesCreate} buttonText={'Submit'}/></div>

    const JSXNotLoggedIn =
      <div>
        <h3>Request some shoes!</h3>
        <ShoesForm onComplete={shoesCreate} buttonText={'Submit'}/></div>

    return (
      <div className="dashboard">
        { this.account.isAdmin ? JSXAdminView : JSXNotLoggedIn }
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
