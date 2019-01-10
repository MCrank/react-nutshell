import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  };

  render() {
    return (
      <div className="Home mx-auto">
        <div className="card-deck mb-3">
          <div className="card border-dark" id="friends" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title">
                <i className="fas fa-users fa-7x" />
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">Freinds</h6>
              <p className="card-text">My Homies</p>
            </div>
          </div>
          <div className="card border-dark" id="articles" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title">
                <i className="far fa-newspaper fa-7x" />
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">Articles</h6>
              <p className="card-text">News Articles</p>
            </div>
          </div>
          <div className="card border-dark" id="weather" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title">
                <i className="fas fa-cloud-sun-rain fa-7x" />
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">Weather</h6>
              <p className="card-text">Your Weather Forecast</p>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card border-dark" id="events" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title">
                <i className="fas fa-calendar-alt fa-7x" />
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">Events</h6>
              <p className="card-text">Local happenings in your town</p>
            </div>
          </div>
          <div className="card border-dark" id="messages" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title">
                <i className="far fa-comments fa-7x" />
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">Messages</h6>
              <p className="card-text">Newer better AOL</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
