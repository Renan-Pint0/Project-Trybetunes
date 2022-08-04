import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  constructor() {
    super();

    this.buttonCondition = this.buttonCondition.bind(this);

    this.state = {
      disabledButton: true,
      userName: '',
      loading: false,
    };
  }

    saveUserName = async (target) => {
      target.preventDefault();
      const { userName } = this.state;
      const { history } = this.props;
      this.setState({ loading: true });
      localStorage.setItem('name', userName);
      await createUser({ name: userName });
      this.setState({ loading: false });
      history.push('/search');
    }

    buttonCondition({ target }) {
      const minLength = 3;
      const condition = target.value.length < minLength;
      this.setState({ disabledButton: condition, userName: target.value });
    }

    render() {
      const { disabledButton, loading } = this.state;
      return (
        <div data-testid="page-login">
          <input
            type="text"
            name="name-input"
            data-testid="login-name-input"
            placeholder="Username"
            onChange={ this.buttonCondition }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ disabledButton }
            onClick={ this.saveUserName }
          >
            Entrar
          </button>
          {loading && <Loading /> }
        </div>
      );
    }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
