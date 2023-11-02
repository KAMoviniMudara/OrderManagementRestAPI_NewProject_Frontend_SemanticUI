import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Input, Table } from "semantic-ui-react";

export const Main = () => {
  const navigate = useNavigate();
  const userRole = "ADMIN"; 

  function handleClick(route) {
    navigate(route);
  }

  if (userRole !== "ADMIN") {
    return (
      <div className="main" style={{ height: "100vh" }}>
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: "450px" }}>
            <Header as="h1" color="red" textAlign="center">
              You are not authorized to access this page.
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  return (
    <div className="main" style={{ height: "100vh" }}>
      <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h1" color="teal" textAlign="center">
            CUSTOMER MANAGEMENT SYSTEM
          </Header>
          <Form size="large">
            <Input fluid placeholder="User Name" />
            <br />
            <Table celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Button
                      color="teal"
                      fluid
                      onClick={() => handleClick("/CustomerDetails")}
                    >
                      Customer Details
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="teal"
                      fluid
                      onClick={() => handleClick("/OrderDetails")}
                    >
                      Order Details
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="teal"
                      fluid
                      onClick={() => handleClick("/ItemDetails")}
                    >
                      Item Details
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell colSpan="3" className="logout-cell">
                    <Button color="red" fluid onClick={() => handleClick("/")}>
                      Logout
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
