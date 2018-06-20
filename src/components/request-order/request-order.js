import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitAllItems } from '../../actions/order-actions';
import RequestItem from '../request-item/request-item';
import autoBind from '../../utils/auto-bind';

class Order extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, Order);
  }

  handleSubmit() {
    this.props.submitOrder(this.props.requestItems);
  }

  render() {
    const {
      requestItems,
    } = this.props;

    return (
      <div className='requestOrder' key={requestItems.id}>
        {
        requestItems.map(item => 
        <RequestItem requestItem={item} key={item.id} />)
        }
        <button className='requestOrderButton' onClick={this.handleSubmit}>submit all</button>
      </div>
    );
  }
}

Order.propTypes = {
  requestItems: PropTypes.array,
  submitOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  requestItems: state.requestItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: data => dispatch(submitAllItems(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
