import React from 'react';
import smashRequests from '../../../helpers/data/smashRequests';
import authRequests from '../../../helpers/data/authRequests';
import friendRequests from '../../../helpers/data/friendRequests';
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

  removeFriend = (friendRequestId) => {
    friendRequests
      .deleteFriend(friendRequestId)
      .then(() => {
        this.getAllUserFriends();
      })
      .catch(error => console.error('An error occured deleteing a friend', error));
  };

  render() {
    const { potentialFriends, pendingFriends, currentFriends } = this.state;
    const friendItemComponents = (friendArray, status) => friendArray.map(friend => <FriendItem key={friend.id} friend={friend} status={status} deleteFriend={this.removeFriend} />);

    return (
      <div className="Friends">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <h3>Potential Friends</h3>
              {friendItemComponents(potentialFriends, 'potential')}
            </div>
            <div className="col-sm">
              <h3>Pending Requests</h3>
              {friendItemComponents(pendingFriends, 'pending')}
            </div>
            <div className="col-sm">
              <h3>Current Friends</h3>
              {friendItemComponents(currentFriends, 'current')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
