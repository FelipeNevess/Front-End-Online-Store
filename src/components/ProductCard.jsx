import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddItem from './AddItem';
import '../styles/productCard.css';

class ProductCard extends Component {
  render() {
    const { item } = this.props;
    const { title, thumbnail, price, id } = item;
    return (
      <div className="con_cards">
        <Link
          to={ `/details/${id}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product" className="cont_img_cards">
            <img src={ thumbnail } alt={ title } />
            <span data-testid="shopping-cart-product-name">{ title }</span>
            <span>R$ { price }</span>
          </div>
        </Link>
        <AddItem product1={ item } dataTestId="product-add-to-cart" />
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
