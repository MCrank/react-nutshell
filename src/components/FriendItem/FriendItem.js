import React from 'react';
import PropTypes from 'prop-types';

class FriendItem extends React.Component {
  static propTypes = {
    friendArray: PropTypes.array,
    status: PropTypes.string,
  };

  render() {
    const { friendArray, status } = this.props;

    return (
      <div className="FriendItem">
        <h3>{status}</h3>
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendItem;
