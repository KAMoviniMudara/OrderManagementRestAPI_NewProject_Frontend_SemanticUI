import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Input, Segment } from "semantic-ui-react";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLoginClick() {
    const loginData = {
      email: email,
      password: password,
    };

    fetch("http://localhost:8088/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/Main");
        } else {
          setErrorMessage("Email or password is incorrect.");
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  }

  function handleRegisterClick() {
    // Navigate to the "Register" page when clicking the "Register" button
    navigate("/Register");
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
                  placeholder="Email"
                  id="email"
                  name="email"
                  size="massive"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Field>
              <Button color="teal" fluid size="massive" onClick={handleLoginClick}>
                Login
              </Button>
              <br />
              <Button color="teal" fluid size="massive" onClick={handleRegisterClick}>
                Register
              </Button>
              {errorMessage && (
                <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
              )}
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
