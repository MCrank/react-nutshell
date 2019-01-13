import React from 'react';
import smashRequests from '../../../helpers/data/smashRequests';
import authRequests from '../../../helpers/data/authRequests';

import './Friends.scss';

class Friends extends React.Component {
  state = {
    users: [],
    pendingFriends: [],
    potentialFriends: [],
    currentFriends: [],
  };

  componentDidMount() {
    this.getAllUserFriends();
  }

  getAllUserFriends = () => {
    smashRequests
      .usersAndFriends(authRequests.getCurrentUid())
      .then((users) => {
        this.setState({ users });
        this.filterAllUsers();
      })
      .catch(error => console.error('stuff broke', error));
  };

  filterAllUsers = () => {
    const pendingFriends = this.state.users.filter(user => user.friendRequest !== '' && user.isPending === true);
    const potentialFriends = this.state.users.filter(user => user.friendRequest === '');
    const currentFriends = this.state.users.filter(user => user.friendRequest !== '' && user.isAccepted === true);
    this.setState({ pendingFriends, potentialFriends, currentFriends });
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
