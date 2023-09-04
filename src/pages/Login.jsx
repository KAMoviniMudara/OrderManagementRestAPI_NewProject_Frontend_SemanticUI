import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Input, Segment } from "semantic-ui-react";

export const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Main");
  }

  return (
    <div className="login">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h1" color="teal" textAlign="center">
            LOGIN
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Field>
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  id="username"
                  name="username"
                  size="massive" 
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  size="massive" 
                />
              </Form.Field>
              <Button 
                    color="teal" 
                    fluid size="massive" 
                    onClick={(e) => handleClick()}>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
