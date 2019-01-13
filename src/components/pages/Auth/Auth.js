import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import userRequests from '../../../helpers/data/userRequests';

import authRequests from '../../../helpers/data/authRequests';

import './Auth.scss';

class Auth extends React.Component {
  googleAuthenticateUser = () => {
    authRequests
      .authenticate()
      .then((results) => {
        userRequests.getUserByUid(results.user.uid).then((user) => {
          if (!user) {
            const newUser = {
              photo: `${results.user.photoURL}`,
              uid: `${results.user.uid}`,
              userName: `${results.user.displayName}`,
            };
            userRequests.createUser(newUser);
          }
          this.props.history.push('/home');
        });
      })
      .catch(error => console.error('There was an error with the Google Auth Request', error));
  };

  render() {
    return (
      <div className="Auth my-5">
        <div className="d-flex justify-content-center mt-5">
          <GoogleLoginButton onClick={this.googleAuthenticateUser} />
        </div>
      </div>
    );
  }
}

export default Auth;
