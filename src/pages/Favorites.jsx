import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    console.log(localStorage.getItem('favorite_songs'));
    return (
      <div data-testid="page-favorites">
        <Header />
      </div>
    );
  }
}

export default Favorites;
