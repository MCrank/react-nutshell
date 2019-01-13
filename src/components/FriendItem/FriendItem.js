import React from 'react';
import PropTypes from 'prop-types';
import friendShape from '../../helpers/propz/friendShape';

import './FriendItem.scss';

class FriendItem extends React.Component {
  static propTypes = {
    friend: friendShape,
    status: PropTypes.string,
  };

  render() {
    const { friend, status } = this.props;
    const makeButtons = () => {
      if (status === 'current') {
        return (
          <button href="#" className="btn btn-primary btn-sm" id={friend.friendRequestId}>
            Remove
          </button>
        );
      }
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
