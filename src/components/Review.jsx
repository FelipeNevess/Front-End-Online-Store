import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';

class Review extends Component {
  constructor(props) {
    super(props);

    this.setChange = this.setChange.bind(this);

    this.state = {
      email: '',
      textValue: '',
      startValue: '',
      list: undefined,
    };
  }

  componentDidMount() {
    this.createReview();
  }

  setChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  ChangeRating = (event, value) => {
    this.setState({
      startValue: value,
    });
  }

  Save = () => {
    const { startValue } = this.state;
    const { id } = this.props;
    const email = document.querySelector('.id-email').value;
    const rating = startValue;
    const mensage = document.querySelector('.id-text').value;
    const review = { email, rating, mensage };

    if (localStorage[id]) {
      const array = JSON.parse(localStorage[id]);
      const filter = array.filter((coisas) => {
        if (coisas.email === review.id) {
          return false;
        }
        return true;
      });

      localStorage[id] = JSON.stringify([...filter, review]);
    } else {
      localStorage[id] = JSON.stringify([review]);
    }
    this.createReview();
  }

  createReview = () => {
    const { id } = this.props;
    if (!localStorage[id] || localStorage[id] === '[]') return;
    const load = JSON.parse(localStorage[id]);
    const list = load.map((element) => (
      <li key={ element.email }>
        <span>{ element.email }</span>
        <Rating readOnly="true" value={ element.rating } />
        <p>{ element.mensage }</p>
      </li>
    ));
    this.setState({ list });
  }

  render() {
    const { email, textValue, list } = this.state;
    return (
      <div>
        <form>
          <h3>Avaliações</h3>
          <div>
            <label htmlFor="email">
              <input
                type="email"
                className="id-email"
                name="email"
                value={ email }
                placeholder="Email"
                required
                onChange={ this.setChange }
              />
            </label>
            <Rating
              precision={ 0.5 }
              onChange={ this.ChangeRating }
              required
            />
          </div>
          <div>
            <textarea
              onChange={ this.setChange }
              className="id-text"
              value={ textValue }
              name="textValue"
              rows="5"
              cols="50"
              placeholder="Comentário"
              data-testid="product-detail-evaluation"
            />
          </div>
          <div>
            <button type="button" onClick={ this.Save }>Avaliar</button>
          </div>
        </form>
        <ul>
          {!list ? <span>Sem validação</span> : list}
        </ul>
      </div>
    );
  }
}

export default Review;
