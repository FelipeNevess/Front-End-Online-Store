import React, { Component } from 'react';
import Country from '../components/Country';

import '../styles/checkout.css';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cpf: '',
      email: '',
      tel: '',
      cep: '',
      adress: '',
      complement: '',
      number: '',
      citty: '',
    };
  }

    inputHandler = ({ target }) => {
      const { name } = target;
      const { value } = target;
      this.setState({ [name]: value });
    }

    render() {
      const { name, cpf, email, tel, cep, adress, complement, number,
        citty } = this.state;
      return (
        <div className="con-form">
          <div className="header-form">
            <h4>Revise seus Produtos</h4>
            <span>PRODUTOS</span>
          </div>
          <form>
            <h4>Informações do Comprador</h4>
            <div className="con-body-form">
              <input
                type="text"
                data-testid="checkout-fullname"
                onChange={ this.inputHandler }
                value={ name }
                name="name"
                placeholder="Nome Completo"
              />
              <input
                type="text"
                name="cpf"
                value={ cpf }
                onChange={ this.inputHandler }
                data-testid="checkout-cpf"
                placeholder="CPF"
              />

              <input
                type="email"
                name="email"
                value={ email }
                placeholder="Email"
                data-testid="checkout-email"
                onChange={ this.inputHandler }
              />

              <input
                type="text"
                name="tel"
                value={ tel }
                placeholder="Telefone"
                data-testid="checkout-phone"
                onChange={ this.inputHandler }
              />

              <input
                type="text"
                name="cep"
                value={ cep }
                onChange={ this.inputHandler }
                data-testid="checkout-cep"
                placeholder="CEP"
              />
              <input
                type="text"
                name="adress"
                data-testid="checkout-address"
                value={ adress }
                placeholder="Endereço"
                onChange={ this.inputHandler }
              />
              <input
                placeholder="Complemento"
                value={ complement }
                name="complement"
                onChange={ this.inputHandler }
                type="text"
              />
              <input
                placeholder="Número"
                value={ number }
                name="number"
                onChange={ this.inputHandler }
                type="number"
              />
              <input
                placeholder="Cidade"
                value={ citty }
                name="citty"
                onChange={ this.inputHandler }
                type="text"
              />
              <Country inputHandler={ this.inputHandler } />
            </div>
          </form>
          <div className="con-method">
            <h4>Método de Pagamento</h4>
            <div className="cont-c1">
              <label htmlFor="boleto">
                Boleto
                <input type="radio" id="boleto" name="payment-method" />
              </label>
              <label htmlFor="visa-card">
                Visa
                <input type="radio" id="visa-card" name="payment-method" />
              </label>
              <label htmlFor="master-card">
                Master Card
                <input type="radio" id="master-card" name="payment-method" />
              </label>
            </div>
          </div>
          <div className="button-container">
            <button type="button" className="con-btn">COMPRAR</button>
          </div>
        </div>
      );
    }
}

export default Checkout;
