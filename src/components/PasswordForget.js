import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Input, InputGroup, Container, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const PasswordForgetPage = () =>
  <div>
    <Card body inverse color='dark' style={{width: '450px'}} className='mx-auto d-block'>
      <CardBody>
        <CardTitle style={{textAlign: 'center', margin: '3px auto'}}><b>Forgot Password</b></CardTitle>
        <br />
        <PasswordForgetForm />
      </CardBody>
    </Card>
  </div>


  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

  const INIT_STATE = {
    email: '',
    error: null,
  };


class PasswordForgetForm extends Component {
  state = {
    ...INIT_STATE,
  }

  onSubmit = event => {
    const { email } = this.state;

    auth.doPasswordReset(email)
    .then(() => {
      this.setState(() => ({ ...INIT_STATE }));
      this.setState(byPropKey('error', 'Password recovery email successfully sent'));
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  }

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '' || !email.includes('@');

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup className='d-block'>
          <Label lg={12} for='email'>Account Email</Label>
          <Col lg={12}>
            <Input valid={!isInvalid} type='email' id='email' name='email' value={this.state.email} onChange={event => this.setState(byPropKey('email', event.target.value))} placeholder='Email Address' />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col>
            <Button disabled={isInvalid} block type='submit' color='light'>Send Reset Email</Button>
          </Col>
        </FormGroup>
        { error && <p style={{textAlign: 'center'}}>{error.message ? error.message : error}</p> }
      </Form>
    );
  }
}

const PasswordForgetLink = () =>
  <p style={{textAlign: 'center'}}>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
