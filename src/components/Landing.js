import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardDeck, CardGroup, Col, Row } from 'reactstrap';
import Futuristic01 from '../assets/images/futuristic_01.jpg';
import Futuristic02 from '../assets/images/futuristic_05.jpg';

const labelStyle = {
  alignText: 'center',
  margin: '5px auto',
}

const picStyle = {
  borderRadius: '3px',
  width: '100%',
  height: '300px',
  marign: '3px auto',
}

const LandingPage = () =>
  <div style={{margin: 'auto', width: '60%'}}>
    <Card body>
      <CardBody>
        <CardTitle><b><u>Landing Page</u></b></CardTitle>
        <br />
        <CardGroup>
          <Card body inverse color='primary'>
            <CardImg top style={picStyle} width='50%' alt='futuristic_01' src={Futuristic01} />
            <CardTitle style={labelStyle}>
              A World Apart...
            </CardTitle>
          </Card>
          <Card body inverse color='primary'>
            <CardImg top style={picStyle} width='50%' alt='futuristic_02' src={Futuristic02} />
            <CardTitle style={labelStyle}>
              Look to the future
            </CardTitle>
          </Card>
        </CardGroup>
      </CardBody>
    </Card>
  </div>

export default LandingPage
