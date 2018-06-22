import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitAllItems } from '../../actions/order-actions';
import { removeAll } from '../../actions/request-item-actions';
import RequestItem from '../request-item/request-item';
import autoBind from '../../utils/auto-bind';
import './request-order.scss';

class Order extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, Order);
  }

  handleSubmit() {
    const order = {
      requestItems: this.props.requestItems,
    };

    this.props.submitOrder(order)
      .then(() => {
        this.props.clearAll();
      });
  }

  render() {
    const {
      requestItems,
    } = this.props;

    return (
      <div className='requestOrder' key={Order.id}>
      <div id="itemList">
      <label id="requestHeader">Current Requests:</label>
        {
        requestItems.map(item => 
          <RequestItem requestItem={item} key={item.id} />)
        }
      <button className='authButton' onClick={this.handleSubmit}>submit</button>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  requestItems: PropTypes.array,
  submitOrder: PropTypes.func,
  clearAll: PropTypes.func,
};

const mapStateToProps = state => ({
  requestItems: state.requestItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: data => dispatch(submitAllItems(data)),
    clearAll: () => dispatch(removeAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
