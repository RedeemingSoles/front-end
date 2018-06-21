import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <main className='modal-main'>
          <button className="authButton" onClick={this.props.handleClose}> close </button>
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
