import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input, InputGroup, InputGroupButton, CardHeader, Form, FormText, FormGroup, Label } from 'reactstrap';
import * as theme from '../constants/theme';

const signInCardStyle = {
  borderThickness:'10px',
  margin: '3px auto',
  width: '50%',
  maxWidth: '315px',
  backgroundColor: theme.secondaryColor,
  color: theme.textColorLight,
}

const SignInPage = () =>
  <div>
    <Card body outline color={theme.accentMedium} style={signInCardStyle}>
      <CardBody>
        <CardTitle style={{margin: 'auto', textAlign: 'center', fontSize: '14pt'}}><b>Sign In</b></CardTitle>
        <br />
        <Card body style={{backgroundColor: theme.accentLight}}>
          <CardBody>
            <FormGroup>
              <Label for='clientEmail' style={{color: theme.primaryColor}}>Email</Label>
              <Input type='email' name='email' id='clientEmail' placeholder='Email' />
            </FormGroup>
            <FormGroup>
              <Label for='clientPassword' style={{color: theme.primaryColor}}>Password</Label>
              <Input type='password' name='password' id='clientPassword' placeholder='Password' />
            </FormGroup>
            <br />
            <Button href='/' block>Sign In</Button>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  </div>

export default SignInPage;
