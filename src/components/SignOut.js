import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';
import { withRouter } from 'react-router-dom';

class SignOutButton extends Component {
  render() {
    const { history } = this.props;
    const user = auth.getUser();

    return (

      <Button color='dark' onClick={() => {
          auth.doSignOut();
          history.push(routes.SIGN_IN);
        }}>
        Sign Out
      </Button>
    );
  };
}

export default withRouter(SignOutButton);
