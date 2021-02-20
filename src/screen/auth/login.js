import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const Login = (props) => {
  return (
      <Container><br></br><br></br>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="กรุณาใส่อีเมล" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="ใส่พาสเวิร์ด" />
      </FormGroup>
   <center><Button>Submit</Button></center>
    </Form></Container>
  );
}

export default Login;