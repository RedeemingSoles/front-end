import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as requestItemActions from '../../actions/request-item-actions';

class RequestItem extends React.Component {
  render() {
    const {
      requestItem, 
      requestItemRemove, 
      requestItemUpdate,
    } = this.props;

    return (
      <div className='requestItem' key={requestItem.id}>
        <ul>
          <li>${requestItem.childname}</li>
          <li>${requestItem.shoeType}</li>
          <li>${requestItem.age}</li>
          <li>${requestItem.gender}</li>
          <li>${requestItem.shoeSize}</li>
          <li>${requestItem.message}</li>
        </ul>
        <button className='requestItemUpdate' onClick={() => requestItemUpdate(requestItem)}>edit</button>
        <button className='requestItemRemove' onClick={() => requestItemRemove(requestItem)}>X</button>
      </div>
    );
  }
}

RequestItem.propTypes = {
  requestItem: PropTypes.object,
  requestItemRemove: PropTypes.func,
  requestItemUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestItemRemove: data => dispatch(requestItemActions.remove(data)),
    requestItemUpdate: data => dispatch(requestItemActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(RequestItem);
