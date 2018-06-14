import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import * as theme from '../constants/theme';

const signInCardStyle = {
  borderThickness:'10px',
  margin: '3px auto',
  width: '50%',
  maxWidth: '315px',
}

const SignInPage = () =>
  <div>
    <Card body outline color='primary' style={signInCardStyle}>
      <CardBody>
        <CardTitle><b><u>Sign In Page</u></b></CardTitle>
        <br />
      </CardBody>
    </Card>
  </div>

export default SignInPage;
