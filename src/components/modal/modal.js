import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class Modal extends React.Component {
  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName} id="modal">
        <main className='modal-main'>
          <button className="modalButton" onClick={this.props.handleClose}> x </button>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
