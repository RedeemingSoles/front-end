import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import autoBind from '../../utils/auto-bind';
import ShoesForm from '../shoes-form/shoes-form';
import * as requestItemActions from '../../actions/request-item-actions';
import Order from '../request-order/request-order';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, Dashboard);
  }

  render() {
    const {
      requestItemCreate,
    } = this.props;

    return (
      <div className="dashboard">
        <h3>Request Some Shoes</h3>
        <p> All Shoe Requests: </p>
        <Order />
        <ShoesForm onComplete={requestItemCreate} buttonText={'Add'}/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  requestItemCreate: PropTypes.func,
  requestItems: PropTypes.array,
};


const mapStateToProps = state => ({
  requestItems: state.requestItems,
});

const mapDispatchToProps = dispatch => ({
  requestItemCreate: item => dispatch(requestItemActions.create(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
