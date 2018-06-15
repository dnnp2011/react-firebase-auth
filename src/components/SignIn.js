import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,
  Input, InputGroup, InputGroupButton, CardHeader, Form, FormText, FormGroup,
  Label } from 'reactstrap';
import * as theme from '../constants/theme';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { SignUpLink } from './SignUp';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';

const signInCardStyle = {
  margin: '3px auto',
  backgroundColor: theme.secondaryColor,
  color: theme.textColorLight,
}

const SignInPage = ({ history }) =>
  <div className='container' style={{height: '100%', alignItems: 'center', display: 'flex'}}>
    <SignInForm history={history} />
  </div>

  const INIT_STATE = {
    email: '',
    password: '',
    error: null,
  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...INIT_STATE
    }
  }


  onSubmit = (event) => {
    const { email, password } = this.state;
    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
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
    const { email, password, error, } = this.state;
    const emailValid = email !== '' && email.includes('@');
    const passwordValid = password !== '';
    const isInvalid = !emailValid || ! passwordValid;

    return (
      <Card body style={{backgroundColor: theme.accentLight, height: '50%', marginTop: '15%'}}>
        <CardBody>
          <Form onSubmit={(event) => this.onSubmit(event)}>
            <FormGroup>
              <Label for='clientEmail' style={{color: theme.primaryColor}}>Email</Label>
              <Input
                value={email}
                onChange={event => this.handleInput(event)}
                valid={emailValid}
                type='email'
                name='email'
                id='clientEmail'
                placeholder='Email' />
            </FormGroup>
            <FormGroup>
              <Label for='clientPassword' style={{color: theme.primaryColor}}>Password</Label>
              <Input
                value={password}
                onChange={event => this.handleInput(event)}
                valid={passwordValid}
                type='password'
                name='password'
                id='clientPassword'
                placeholder='Password' />
            </FormGroup>
            <br />
            <Button disabled={isInvalid} type='submit' block>Sign In</Button>
            <br />
            { error && <p style={{textAlign: 'center'}}>{error.message}</p> }
            <SignUpLink />
            <PasswordForgetLink />
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(SignInPage);
