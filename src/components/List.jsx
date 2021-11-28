import React, { Component } from 'react';
import * as api from '../services/api';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCat();
  }

  fetchCat = async () => {
    const { callback } = this.props;
    const json = await api.getCategories();
    const list = json
      .map(({ id, name }) => (
        <li
          data-testid="category"
          onClick={ () => callback(id) }
          aria-hidden="true"
          key={ id }
          id={ name }
        >
          { name }
        </li>
      ));
    this.setState({ loading: false, list });
  }

  render() {
    const { list, loading } = this.state;
    if (loading) return <div>Carregando...</div>;
    return (
      <div>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}

export default List;
