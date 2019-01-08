import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import PropTypes from 'prop-types';

import authRequests from '../../helpers/data/authRequests';

import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  };

  googleAuthenticateUser = () => {
    authRequests
      .authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch(error => console.error('There was an error with the Google Auth Request', error));
  };

  render() {
    return (
      <div className="Auth">
        <div className="d-flex justify-content-center mt-5">
          <GoogleLoginButton onClick={this.googleAuthenticateUser} />
        </div>
      </div>
    );
  }
}

export default Auth;
