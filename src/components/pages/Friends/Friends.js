import React from 'react';
import smashRequests from '../../../helpers/data/smashRequests';
import authRequests from '../../../helpers/data/authRequests';
import FriendItem from '../../FriendItem/FriendItem';

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
      .catch(error => console.error('There was an error getting Users and Friends', error));
  };

  filterAllUsers = () => {
    const pendingFriends = this.state.users.filter(user => user.friendRequest !== '' && user.isPending === true);
    const potentialFriends = this.state.users.filter(user => user.friendRequest === '');
    const currentFriends = this.state.users.filter(user => user.friendRequest !== '' && user.isAccepted === true);
    this.setState({ pendingFriends, potentialFriends, currentFriends });
  };

  friendItemBuilder = (friendArray, status) => <FriendItem friendArray={friendArray} status={status} />;

  render() {
    const { potentialFriends, pendingFriends, currentFriends } = this.state;
    return (
      <div className="Friends">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">{this.friendItemBuilder(potentialFriends, 'potential')}</div>
            <div className="col-sm">{this.friendItemBuilder(pendingFriends, 'pending')}</div>
            <div className="col-sm">{this.friendItemBuilder(currentFriends, 'current')}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
