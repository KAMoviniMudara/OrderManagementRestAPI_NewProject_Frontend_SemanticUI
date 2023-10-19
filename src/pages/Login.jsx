import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Input, Segment } from "semantic-ui-react";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginClick() {
    try {
      const loginData = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://localhost:8088/api/v1/user/login", loginData);

      if (response.data.message === "Email not exists") {
        alert("Email not exists");
      } else if (response.data.message === "Login Success") {
        navigate("/Main");
      } else {
        alert("Incorrect Email and Password do not match");
      }
    } catch (err) {
      alert(err);
    }
  }

  function handleRegisterClick() {
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
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
