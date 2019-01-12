import React from 'react';
import smashRequests from '../../../helpers/data/smashRequests';
import authRequests from '../../../helpers/data/authRequests';

import './Friends.scss';

class Friends extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getAllUserFriends();
  }

  getAllUserFriends = () => {
    smashRequests
      .usersAndFriends(authRequests.getCurrentUid())
      .then((users) => {
        this.setState({ users });
      })
      .catch(error => console.error('stuff broke', error));
  };

  render() {
    return (
      <div className="Friends">
        <h2>Friends Page</h2>
      </div>
    );
  }
}

export default Friends;
