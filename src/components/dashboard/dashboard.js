import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import autoBind from '../../utils/auto-bind';
import ShoesForm from '../shoes-form/shoes-form';
import ShoesDonorForm from '../shoes-donor-form/shoes-donor-form';
// import * as requestItemActions from '../../actions/request-item-actions';
// import RequestItem from '../request-item/request-item';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, Dashboard);
  }

  render() {
    const {
      requestItemCreate,
      // requestItems,
    } = this.props;

    return (
      <div className="dashboard">
        <h3>Request Some Shoes</h3>
        <p> All Shoe Requests: </p>
        {/* {
          requestItems.map(item => 
          <RequestItem requestItem={item} key={item.id}></RequestItem>)
        } */}
        <ShoesForm onComplete={requestItemCreate} handleComplete={this.handleAddShoes} buttonText={'Add'}/>
        <h3>Input Donated Shoes</h3>
        <ShoesDonorForm onComplete={requestItemCreate} buttonText={'Submit'}/>
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

// const mapDispatchToProps = dispatch => ({
//   requestItemCreate: item => dispatch(requestItemActions.createRequest(item)),
// });
export default connect(mapStateToProps)(Dashboard);
