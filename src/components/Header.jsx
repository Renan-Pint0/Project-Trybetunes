import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default Header;
