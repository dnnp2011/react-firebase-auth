import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, InputGroup, Col, Row, Alert, FormFeedback } from 'reactstrap';
import { auth } from '../firebase/index';

import * as theme from '../constants/theme';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <Card inverse body className="w-50 d-block" style={{margin:'3px auto', borderWidth: '2px', backgroundColor: theme.secondaryColor}}>
      <CardTitle className="mx-auto d-block w-25"><b>Sign Up</b></CardTitle>
      <br />
      <SignUpForm history={history}  />
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
    const {
      username,
      email,
      passOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passOne)
    .then(authUser => {
      this.setState(() => ({...INIT_STATE}));
      history.push(routes.HOME);
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  }

  handleInput = (event) => {
    this.setState(byPropKey(event.target.name, event.target.value))
  }

  render() {
    const { username, email, passOne, passTwo, error } = this.state;

    const userNameValid = username !== '';
    const emailValid = email !== '' && email.includes('@');
    const passwordValid = passOne !== '' && passOne === passTwo;
    const isInvalid = !userNameValid || !emailValid || !passwordValid;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup style={{margin: ' 5px auto'}}>
          <Label sm={6} for="userName">Username</Label>
          <Col sm={12}>
            <Input
              value={username}
              onChange={event => this.handleInput(event)}
              valid={userNameValid}
              type='username'
              name='username'
              id='userName'
              placeholder='Enter Username' />
            <FormFeedback valid />
          </Col>
        </FormGroup>
        <br />
        <FormGroup style={{margin: ' 5px auto'}}>
          <Label sm={6} for="userEmail">Email Address</Label>
          <Col sm={12}>
            <Input
              value={email}
              onChange={event => this.handleInput(event)}
              valid={emailValid}
              type='email'
              name='email'
              id='userEmail'
              placeholder='Enter Email' />
          </Col>
        </FormGroup>
        <br />
        <FormGroup style={{margin: ' 5px auto'}}>
          <Label sm={6} for="passwordOne">Password</Label>
          <Col sm={12}>
            <Input
              value={passOne}
              onChange={event => this.handleInput(event)}
              valid={passwordValid}
              type='password'
              name='passOne'
              id='passwordOne'
              placeholder='Enter Password' />
          </Col>
        </FormGroup>
        <br />
        <FormGroup style={{margin: ' 5px auto'}}>
          <Label sm={6} for="passwordTwo">Repeat Pass</Label>
          <Col sm={12}>
            <Input
              value={passTwo}
              onChange={event => this.handleInput(event)}
              valid={passwordValid}
              type='password'
              name='passTwo'
              id='passwordTwo'
              placeholder='Repeat Password' />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row style={{margin: '5px auto'}}>
          <Col sm={12}>
            <Button disabled={isInvalid} block color='primary' type='submit'>Create Account</Button>
          </Col>
        </FormGroup>
        <div style={{textAlign: 'center'}}>
          { error && <p style={{textAlign: 'center'}}>{error.message}</p> }
        </div>
      </Form>
    );
  }
}

const SignUpLink = () =>
  <p style={{textAlign: 'center'}}>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
