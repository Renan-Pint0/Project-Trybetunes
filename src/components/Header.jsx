import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

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
      <div data-testid="header-component">
        {loading && <Loading />}
        <p data-testid="header-user-name">
          {userName}
        </p>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      </div>
    );
  }
}

export default Header;
