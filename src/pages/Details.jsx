import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Review from '../components/Review';
import AddItem from '../components/AddItem';

import carrinho from '../images/carrinho-de-compras.png';

import '../styles/details.css';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const details = await response.json();
    this.setState({
      product: details,
      loading: false,
    });
  }

  render() {
    const { product, loading } = this.state;
    if (loading) return <div>Carregando...</div>;

    return (
      <div className="cont-details">
        <Link
          className="cart"
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <img src={ carrinho } alt="carrinho_de_compras" width="30px" />
        </Link>
        <div className="items-info">
          <img src={ product.thumbnail } alt="product details" />
          <span>{ product.price }</span>
          <span data-testid="product-detail-name">{ product.title }</span>
          <h4>Especificações Técnicas</h4>
          <AddItem product1={ product } dataTestId="product-detail-add-to-cart" />
          <Link
            to="/"
          >
            Voltar
          </Link>
        </div>
        <Review id={ product.id } />
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
