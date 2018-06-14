import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse, Button } from 'reactstrap';
import * as routes from '../constants/routes';
import SignOutButton from './SignOut';

export default class Navigation extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand href={routes.HOME}>
            Authenticate
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href={routes.SIGN_IN}>Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={routes.LANDING}>Landing Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={routes.HOME}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={routes.ACCOUNT}>Account</NavLink>
              </NavItem>
              <NavItem>
                <SignOutButton />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
