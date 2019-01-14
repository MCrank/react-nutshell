import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import friendShape from '../../helpers/propz/friendShape';

import './FriendItem.scss';

class FriendItem extends React.Component {
  static propTypes = {
    friend: friendShape,
    status: PropTypes.string,
    deleteFriend: PropTypes.func,
    addFriend: PropTypes.func,
  };

  removeFriend = (e) => {
    e.preventDefault();
    const friendRequestId = e.target.id;
    const { deleteFriend } = this.props;
    deleteFriend(friendRequestId);
  };

  requestFriend = (e) => {
    e.preventDefault();
    const friendUid = e.target.id;
    const uid = authRequests.getCurrentUid();
    const { addFriend } = this.props;
    const newFriend = {
      friendUid,
      isAccepted: false,
      isPending: true,
      uid,
    };
    addFriend(newFriend);
  };

  render() {
    const { friend, status } = this.props;
    const makeButtons = () => {
      if (status === 'current') {
        return (
          <button href="#" className="btn btn-primary btn-sm" id={friend.friendRequestId} onClick={this.removeFriend}>
            Remove
          </button>
        );
      }
      if (status === 'potential') {
        return (
          <button href="#" className="btn btn-primary btn-sm" id={friend.uid} onClick={this.requestFriend}>
            Request
          </button>
        );
      }
      if (status === 'pending' && friend.friendRequest === 'them') {
        return (
          <div>
            <span>
              <button href="#" className="btn btn-primary btn-sm mx-3">
                Accept
              </button>
            </span>
            <span>
              <button href="#" className="btn btn-primary btn-sm mx-3">
                Decline
              </button>
            </span>
          </div>
        );
      }
      return <p className="font-italic">Pending</p>;
      // Status not matched so just put an empty <p> for now
      // return <p />;
    };

    return (
      <div className="FreindItem card my-4" id={friend.id}>
        <div className="card-header">
          <img src={friend.photo} alt="User" />
          {friend.userName}
        </div>
        <div className="card-body">{makeButtons()}</div>
      </div>
    );
  }
}

export default FriendItem;
