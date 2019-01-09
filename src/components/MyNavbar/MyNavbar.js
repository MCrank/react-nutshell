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
                Friends
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/articles">
                Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/weather">
                Weather
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/events">
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/messages">
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} onClick={logoutClickEvent} to="/home">
                Logout
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
