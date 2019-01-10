import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    const buildNavbar = () => {
      if (isAuthed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/friends">
                <i className="fas fa-users fa-2x" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/articles">
                <i className="far fa-newspaper fa-2x" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/weather">
                <i className="fas fa-cloud-sun-rain fa-2x" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/events">
                <i className="fas fa-calendar-alt fa-2x" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/messages">
                <i className="far fa-comments fa-2x" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} onClick={logoutClickEvent} to="/home">
                <i className="fas fa-sign-out-alt fa-2x" />
              </NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };

    return (
      <div className="MyNavbar">
        <Navbar color="dark" dark expand="md" fixed={'top'}>
          <NavbarBrand href="/">React Nutshell</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
            {/* <Nav className="ml-auto" navbar>
              <NavItem>{isAuthed ? <NavLink onClick={logoutClickEvent}>Logout</NavLink> : ''}</NavItem>
            </Nav> */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
