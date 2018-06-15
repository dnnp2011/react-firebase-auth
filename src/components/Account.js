import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
  Button, CardDeck, CardGroup, Row, Col } from 'reactstrap';
import PasswordForgetPage from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <Card body className='mw-100 d-float mx-auto'>
          <CardBody>
            <CardTitle><b>Account Info</b></CardTitle>
            <CardSubtitle>Welcome: {authUser ? authUser.email : ''}</CardSubtitle>
            <br />
            <CardText>
              <Col sm={12}>
                <CardDeck row
                  style={{display: 'flex', margin: '10px auto', alignItems: 'center', justifyContent: 'center'}}>
                  <PasswordForgetPage />
                  <PasswordChangeForm />
                </CardDeck>
              </Col>
            </CardText>
          </CardBody>
        </Card>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
