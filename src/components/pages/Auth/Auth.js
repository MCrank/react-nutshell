import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

import authRequests from '../../../helpers/data/authRequests';

import './Auth.scss';

class Auth extends React.Component {
  googleAuthenticateUser = () => {
    authRequests
      .authenticate()
      .then(() => {
        this.props.history.push('/home');
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
