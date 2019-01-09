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
    return (
      <div className="MyNavbar">
        <Navbar color="dark" dark expand="md" fixed={'top'}>
          <NavbarBrand href="/">React Nutshell</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>{isAuthed ? <NavLink onClick={logoutClickEvent}>Logout</NavLink> : ''}</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
