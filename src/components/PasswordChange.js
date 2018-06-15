import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, InputGroup, Col } from 'reactstrap';
import { auth } from '../firebase';

const PasswordChangePage = () =>
  <div>
    <Card body inverse color='dark' className='d-block mx-auto' style={{width: '450px', height: '350px'}}>
      <CardTitle style={{textAlign: 'center'}}><b>Change Password</b></CardTitle>
      <CardBody>
        <PasswordChangeForm />
      </CardBody>
    </Card>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INIT_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  state = {
    ...INIT_STATE
  };

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
    .then(() => {
      this.setState(() => ({ ...INIT_STATE }));
      this.setState(byPropKey('error', 'Password successfully changed'));
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label md={12}>New Password</Label>
          <Col md={12}>
            <Input
              type='password'
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
              placeholder='New Password'
              valid={!isInvalid} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label md={12}>Repeat New Password</Label>
          <Col md={12}>
            <Input
              type='password'
              value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
              placeholder='Repeat New Password'
              valid={!isInvalid} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col md={12}>
            <Button disabled={isInvalid} block type='submit'>Update Password</Button>
            <br />
            { error && <p style={{textAlign: 'center'}}>{ error.message ? error.message : error }</p>}
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default PasswordChangePage;
