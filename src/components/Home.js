import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import withAuthorization from './withAuthorization';

const HomePage = () =>
  <div>
    <Card body inverse color='dark' className='w-75 d-block mx-auto'>
      <CardTitle><b>Home Page</b></CardTitle>
      <CardBody>
        <CardText>
          <div>Welcome home!</div>
          <p>
            Only signed in users can view this page.
          </p>
        </CardText>
      </CardBody>
    </Card>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
