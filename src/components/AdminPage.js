import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
  Button, CardDeck, CardGroup, Row, Col, Alert } from 'reactstrap';
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';

const AdminPage = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        <div>
          <Card body inverse color='dark' className='w-75 d-block mx-auto'>
            <CardTitle><b>Admin Page</b></CardTitle>
            <CardBody>
              <CardText>
                <Alert color='danger'>RESTRICTED AREA!</Alert>
                <p>
                  Only Administrators can view this page.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </div>
      }
    </AuthUserContext.Consumer>
  );
}

const authCondition = (authUser) => !!authUser && authUser.flag === 'ADMIN';

export default withAuthorization(authCondition)(AdminPage);
