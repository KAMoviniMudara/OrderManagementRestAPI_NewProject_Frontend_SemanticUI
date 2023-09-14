import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Input, Segment } from "semantic-ui-react";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    retypePassword: "",
    email: "",
    city: "",
    birthdate: "",
    telephoneNumbers: [],
  });

  function handleRegisterClick() {
    // Perform registration logic here using formData
    // After registration, you can navigate to another page (e.g., the login page)
    navigate("/Login");
  }

  function handleInputChange(event, { name, value }) {
    setFormData({ ...formData, [name]: value });
  }

  function handleTelephoneInputChange(event, { value }) {
    // Split the comma-separated string into an array
    const telephoneNumbers = value.split(",");
    setFormData({ ...formData, telephoneNumbers });
  }

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
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
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
                  icon="map marker"
                  iconPosition="left"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  placeholder="Birthdate"
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="Telephone Numbers (comma-separated)"
                  name="telephoneNumbers"
                  value={formData.telephoneNumbers.join(",")}
                  onChange={handleTelephoneInputChange}
                />
              </Form.Field>
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
