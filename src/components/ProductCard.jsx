import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddItem from './AddItem';

class ProductCard extends Component {
  render() {
    const { item } = this.props;
    const { title, thumbnail, price, id } = item;
    return (
      <div>
        <Link
          to={ `/details/${id}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <span data-testid="shopping-cart-product-name">{ title }</span>
            <img src={ thumbnail } alt={ title } />
            <span>{ price }</span>
          </div>
        </Link>
        <AddItem product1={ item } dataTestId="product-add-to-cart" />
      </div>
    );
  }
}

export default ProductCard;
