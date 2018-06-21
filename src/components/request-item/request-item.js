import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as requestItemActions from '../../actions/request-item-actions';
import './request-item.scss';

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
          <li><strong> Childname:</strong> {requestItem.childName} </li>
          <li><strong> Shoe Type:</strong>  {requestItem.shoeType} </li>
          <li><strong> Age:</strong>  {requestItem.age} </li>
          <li><strong> Gender:</strong>  {requestItem.gender} </li>
          <li><strong> Shoe Size:</strong>  {requestItem.shoeSize} </li>
          <li><strong> Message:</strong>  {requestItem.message}</li>
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
