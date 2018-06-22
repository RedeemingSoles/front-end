import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShoesForm from '../shoes-form/shoes-form';
import Modal from '../modal/modal';
import * as requestItemActions from '../../actions/request-item-actions';
import './request-item.scss';
import autoBind from '../../utils/auto-bind';

class RequestItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    autoBind.call(this, RequestItem);
  }

  render() {
    const {
      requestItem, 
      requestItemRemove, 
      requestItemUpdate,
    } = this.props;

    const showModal = () => requestItemUpdate({ ...requestItem, editing: true });
    const hideModal = () => requestItemUpdate({ ...requestItem, editing: false });
    const updateAndClose = updatedRequestItem => 
      requestItemUpdate({ ...updatedRequestItem, editing: false });

    return (
      <div className='requestItem' key={requestItem.id}>
        <ul>
          <li><strong className="notItalic"> Childname:</strong> {requestItem.childName} </li>
          <li><strong> Shoe Type:</strong>  {requestItem.shoeType} </li>
          <li><strong> Age:</strong>  {requestItem.age} </li>
          <li><strong> Gender:</strong>  {requestItem.gender} </li>
          <li><strong> Shoe Size:</strong>  {requestItem.shoeSize} </li>
          <li><strong> Message:</strong>  {requestItem.message}</li>
        </ul>
        <div className='requestButton'>
      <button className='requestItemUpdate' onClick={showModal}>edit</button>
      <button className='requestItemRemove' onClick={() => requestItemRemove(requestItem)}>X</button>
      <Modal show={requestItem.editing} handleClose={hideModal}>
          <h3>Editing</h3>
          <ShoesForm className='modalView' onComplete={updateAndClose} requestItem={requestItem}/>
        </Modal>
      </div>
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
