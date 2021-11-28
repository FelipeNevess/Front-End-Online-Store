/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import ProductCard from '../components/ProductCard';
import List from '../components/List';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCategory: undefined,
      itemList: undefined,
    };
  }

  fetchApi = async () => {
    const { selectCategory } = this.state;
    const searchProduct = document.querySelector('.search-input').value;
    const json = await api.getProductsFromCategoryAndQuery(selectCategory, searchProduct);

    const list = json.results.map((item) => (
      <ProductCard
        key={ item.id }
        item={ item }
        selCat={ selectCategory }
        query={ searchProduct }
      />
    ));

    if (list.length === 0) {
      this.setState({ itemList: <span>Nenhum produto foi encontrado</span> });
    } else {
      this.setState({ itemList: list });
    }
  }

  searchCategory = (id) => { this.setState({ selectCategory: id }, () => this.fetchApi()) }

  render() {
    const { itemList } = this.state;
    return (
      <main>
        <aside className="categoryList">
          <List callback={ this.searchCategory } />
        </aside>
        <div className="rightBlock">
          <form className="search">
            <label htmlFor="text">
              <input
                id="text"
                className="search-input"
                type="text"
                data-testid="query-input"
              />
              <button data-testid="query-button" onClick={ this.fetchApi } type="button">
                PESQUISAR
              </button>
            </label>
            <Link
              className="cart"
              to="/shoppingcart"
              data-testid="shopping-cart-button"
            >
              Carrinho
            </Link>
          </form>
          <section className="itemsList">
            { !itemList ? (
              <span data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </span>)
              : itemList}
          </section>
        </div>
      </main>
    );
  }
}

export default Home;
