import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();

    this.buttonCondition = this.buttonCondition.bind(this);

    this.state = {
      disabledButton: true,
    };
  }

  buttonCondition({ target }) {
    const minLength = 2;
    const condition = target.value.length < minLength;
    this.setState({ disabledButton: condition });
  }

  render() {
    const { disabledButton } = this.state;
    return (
      <div>
        <div data-testid="page-search">
          <Header />
        </div>
        <div>
          <input
            type="text"
            name="search-artist"
            data-testid="search-artist-input"
            placeholder="Seu artista favorito"
            onChange={ this.buttonCondition }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ disabledButton }
          >
            Pesquisar
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
