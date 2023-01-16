import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';
import '../css/Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      userName: '',
    };
  }

  async componentDidMount() {
    const name = await getUser();
    this.setState({ loading: false, userName: name.name });
  }

  render() {
    const { loading, userName } = this.state;
    return (
      <div data-testid="header-component" className="header">
        <p>TrybeTunes </p>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        <p data-testid="header-user-name" className="header-user-name">
          {userName}
        </p>
        {loading && <Loading />}
      </div>
    );
  }
}

export default Header;
