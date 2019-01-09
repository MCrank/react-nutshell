import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

import connection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';

import './App.scss';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import authRequests from '../helpers/data/authRequests';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  // props contains Location, Match, and History
  const routeChecker = props => (authed === false ? <Component {...props} /> : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />);
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  };

  componentDidMount() {
    connection();

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
    this.setState({ authed: false });
  }

  isAuthenticated = () => {
    this.setState({
      authed: true,
    });
  };

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({
        authed: false,
      });
    };

    // if (!this.state.authed) {
    //   return (
    //     <div className="App">
    //       <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
    //       <Auth isAuthenticated={this.isAuthenticated} />
    //     </div>
    //   );
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
            <div className="row">
              <Switch>
                <PublicRoute path="/auth" component={Auth} authed={this.state.authed} isAuthenticated={this.isAuthenticated} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
