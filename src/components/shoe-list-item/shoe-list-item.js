import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import ShoesForm from '../shoes-form/shoes-form';
import autoBind from '../../utils/auto-bind';

class ShoesItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, ShoesItem);
  }
  render() {
    const { shoes, handleRemoveShoes, handleUpdateShoes } = this.props;

    console.log('props');

    const showModal = () => handleUpdateShoes({ ...shoes, editing: true });

    const hideModal = () => handleUpdateShoes({ ...shoes, editing: false });

    const updateAndClose = (updatedShoes) => {
      handleUpdateShoes({ ...updatedShoes, editing: false });
    };

    return (
    <div className='shoesListItem'>
      <a href="#" onDoubleClick={showModal}><strong>{shoes.shoeType}</strong> : {shoes.shoeSize} </a>
      <button onClick={handleRemoveShoes.bind(null, shoes)}> delete </button>
      <Modal show={shoes.editing} handleClose={hideModal}>
        <h3>Editing {shoes.shoeType}</h3>
        <ShoesForm handleComplete={updateAndClose} shoes={shoes} />
      </Modal>
    </div>
    );
  }
}

ShoesItem.propTypes = {
  shoes: PropTypes.object,
  handleRemoveShoes: PropTypes.func,
  handleUpdateShoes: PropTypes.func,
};

export default ShoesItem;
