import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, InputGroup, Col, Row, Alert } from 'reactstrap';

import * as theme from '../constants/theme';
import * as routes from '../constants/routes';

const SignUpPage = () =>
  <div>
    <Card inverse body className="w-50 d-block" style={{margin:'3px auto', borderWidth: '2px', backgroundColor: theme.primaryColor}}>
      <CardTitle className="mx-auto d-block w-25"><b>Sign Up</b></CardTitle>
      <br />
      <SignUpForm  />
    </Card>
  </div>

const INIT_STATE = {
  username: '',
  email: '',
  passOne: '',
  passTwo: '',
  error: null,
};

const byPropKey = (propName, value) => () => ({
  [propName]: value,
});

class SignUpForm extends Component {
  state = {...INIT_STATE};

  onSubmit = (event) => {
    console.log("Submitting");
  }

  render() {
    const { username, email, passOne, passTwo, error } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row style={{margin: ' 5px auto'}}>
          <Label sm={2} for="userName">Username</Label>
          <Col sm={10}>
            <Input type='username' name='username' id='userName' placeholder='Enter Username' />
          </Col>
        </FormGroup>
        <FormGroup row style={{margin: ' 5px auto'}}>
          <Label sm={2} for="userEmail">Email Address</Label>
          <Col sm={10}>
            <Input type='email' name='email' id='userEmail' placeholder='Enter Email' />
          </Col>
        </FormGroup>
        <FormGroup row style={{margin: ' 5px auto'}}>
          <Label sm={2} for="passwordOne">Password</Label>
          <Col sm={10}>
            <Input type='password' name='passwordOne' id='passwordOne' placeholder='Enter Password' />
          </Col>
        </FormGroup>
        <FormGroup row style={{margin: ' 5px auto'}}>
          <Label sm={2} for="passwordTwo">Repeat Pass</Label>
          <Col sm={10}>
            <Input type='password' name='passwordTwo' id='passwordTwo' placeholder='Repeat Password' />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row style={{margin: '5px auto'}}>
          <Col sm={12}>
            <Button block color='primary' type='submit'>Create Account</Button>
          </Col>
        </FormGroup>
        <div style={{textAlign: 'center'}}>
          { error && <p>{error.message}</p> }
        </div>
      </Form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default SignUpPage;

export {
  SignUpForm,
  SignUpLink,
};
