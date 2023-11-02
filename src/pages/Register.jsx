import React, { useState } from "react";
import { Button, Form, Grid, Header, Input, Icon, Segment } from "semantic-ui-react";

export const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [invalidRole, setInvalidRole] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const handleRegisterClick = async () => {
    if (!formData.userName || !formData.email || !formData.password || !formData.role) {
      setGeneralError("Please fill in all required fields.");
      setPasswordMatch(true);
      setInvalidRole(false);
      return;
    } else {
      setGeneralError("");
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(formData.email)) {
      setGeneralError("Invalid email format. Please enter a valid email.");
      setPasswordMatch(true);
      setInvalidRole(false);
      return;
    }

    if (formData.password === formData.retypePassword) {
      if (formData.role === "USER" || formData.role === "ADMIN") {
        setGeneralError("");
        setPasswordMatch(true);
        setInvalidRole(false);
        try {
          const response = await fetch("http://localhost:8088/api/v1/user/register", {
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
        setInvalidRole(true);
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
             
              {!passwordMatch && <p style={{ color: "red" }}>Passwords do not match.</p>}
              {invalidRole && <p style={{ color: "red" }}>Invalid role. Role must be "USER" or "ADMIN".</p>}
              {generalError && <p style={{ color: "red" }}>{generalError}</p>}
              {registrationSuccess && <p style={{ color: "green" }}>Registration is successful.</p>}
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
