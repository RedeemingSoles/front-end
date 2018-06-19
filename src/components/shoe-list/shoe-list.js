import React from 'react';
import ShoesItem from '../shoe-list-item/shoe-list-item';
import autoBind from '../../utils/auto-bind';

class ShoesList extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, ShoesList);
  }

  // Todo: if not working, check to see this.state.props
  render() {
    console.log(this.props);
    return (
    <ul>
      {
        this.props.shoes.map((shoes) => {
          return (
            <li key={shoes.id}>
            <ShoesItem
            shoes={shoes}
            id={shoes.id}
            handleRemoveShoes={this.props.handleRemoveShoes}
            handleUpdateShoes={this.props.handleUpdateShoes}
            />
            </li>
          );
        })
      }
    </ul>
    );
  }
}

export default ShoesList;
