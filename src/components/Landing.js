import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck, CardGroup, Col, Row } from 'reactstrap';

const LandingPage = () =>
  <div>
    <Card body>
      <CardBody>
        <CardTitle><b><u>Landing Page</u></b></CardTitle>
        <br />
        <CardDeck>
          <Card body inverse color='primary'>
            <CardTitle>
              Card One
            </CardTitle>
          </Card>
          <Card body inverse color='primary'>
            <CardTitle>
              Card Two
            </CardTitle>
          </Card>
        </CardDeck>
      </CardBody>
    </Card>
  </div>

export default LandingPage
