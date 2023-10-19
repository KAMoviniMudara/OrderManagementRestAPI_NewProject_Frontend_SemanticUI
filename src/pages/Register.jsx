import React, { useState } from "react";
import { Button, Form, Grid, Header, Input, Segment } from "semantic-ui-react";

export const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegisterClick = async () => {
    if (formData.password === formData.retypePassword) {
      try {
        const response = await fetch("http://localhost:8088/api/v1/user/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setRegistrationSuccess(true);
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      setPasswordMatch(false);
    }
  };

  const handleInputChange = (event, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="register">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h1" color="teal" textAlign="center">
            REGISTER
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Field>
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Re-type Password"
                  type="password"
                  name="retypePassword"
                  value={formData.retypePassword}
                  onChange={handleInputChange}
                />
              </Form.Field>
              {!passwordMatch && (
                <p style={{ color: "red" }}>Passwords do not match.</p>
              )}

              {registrationSuccess && (
                <p style={{ color: "green" }}>Registration is successful.</p>
              )}

              <Button color="teal" fluid onClick={handleRegisterClick}>
                Register
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
