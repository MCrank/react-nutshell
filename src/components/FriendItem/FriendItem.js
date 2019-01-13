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

    return (
      <div className="FreindItem card my-4" id={friend.id}>
        <div className="card-header">
          <img src={friend.photo} alt="User" />
          {friend.userName}
        </div>
        <div className="card-body">{status} Buttons Go Here</div>
      </div>
    );
  }
}

export default FriendItem;
