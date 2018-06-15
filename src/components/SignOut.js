import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';

class SignOutButton extends Component {
  render() {
    const { history } = this.props;
    const user = auth.getUser();

    return (
      <NavLink
        onClick={(event) => {
          auth.doSignOut();
          history.push(routes.SIGN_IN);
        }}
        href=''>
        Sign Out
      </NavLink>
    );
  };
}

export default withRouter(SignOutButton);
