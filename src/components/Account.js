import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const AccountPage = () =>
  <div>
    <Card body>
      <CardBody>
        <CardTitle><b><u>Account Page</u></b></CardTitle>
        <CardSubtitle>My Profile Info</CardSubtitle>
        <br />
        <CardText>
          <h7><b>About Me:</b></h7>
          <p>
            My name is Dalton Pierce, I'm a programmer from Austin, Texas. I now live in New York City and work at OrchardBlockchain Accelerator!
          </p>
          <Button color='warning'>Edit</Button>
        </CardText>
      </CardBody>
    </Card>
  </div>

export default AccountPage;
