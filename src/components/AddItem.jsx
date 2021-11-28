// Código baseado no código do Matheus Duarte T13 - Tribo A
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {
  handleClick = () => {
    const { product1 } = this.props;
    const produto = {
      title: product1.title,
      thumbnail: product1.thumbnail,
      price: product1.price,
      id: product1.id,
      Qty: 1,
    };
    this.addCartItem(produto);
  }

  addCartItem = (produto) => {
    let listaCompras = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    const [localproduct1, product1] = this.product1Exists(listaCompras, produto);

    if (localproduct1) {
      product1.Qty += 1;
      localStorage.setItem('shoppingCart', JSON.stringify(listaCompras));
    }
    if (!localproduct1) {
      listaCompras = [...listaCompras, product1];
      localStorage.setItem('shoppingCart', JSON.stringify(listaCompras));
    }
  }

  product1Exists = (listaCompras, produto) => {
    const product1Found = listaCompras.find((item) => item.id === produto.id);
    if (!product1Found) return [false, produto];
    return [true, product1Found];
  }

  render() {
    const { dataTestId } = this.props;
    return (
      <button
        onClick={ () => this.handleClick() }
        type="button"
        data-testid={ dataTestId }
      >
        Adicione no Carrinho
        <span>🛒</span>
      </button>
    );
  }
}

AddItem.propTypes = {
  product1: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default AddItem;
