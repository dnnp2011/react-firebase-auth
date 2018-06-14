import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';
import { Link, withRouter } from 'react-router-dom';

handleSignOut = () => {
  auth.doSignOut();

}

const SignOutButton = () =>
  <Button onClick={() => this.handleSignOut}>
    Sign Out
  </Button>

export default SignOutButton;
