import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.restoreLocalStorage();
  }

  restoreLocalStorage = () => {
    const listaCompras = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const list = listaCompras.map((item) => (
      <div key={ item.id }>
        <ProductCard
          key={ item.id }
          item={ item }
        />
        <span data-testid="shopping-cart-product-quantity">
          { item.Qty }
        </span>
      </div>
    ));
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    const cart = (
      <div className="itemsList">
        { list }
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">Finalizar Compras</button>
        </Link>
      </div>);
    return (
      <section>
        { list.length === 0 ? (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>)
          : cart }
      </section>
    );
  }
}

export default ShoppingCart;