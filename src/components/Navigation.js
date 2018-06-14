import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import * as routes from '../constants/routes';

const Navigation = () =>
<div>
  <ul>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
  </ul>
</div>


export default Navigation;
