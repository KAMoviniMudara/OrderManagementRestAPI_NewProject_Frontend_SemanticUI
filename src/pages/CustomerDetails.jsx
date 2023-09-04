import { useNavigate } from "react-router-dom";
import { Input, Button, Table, Header, Grid } from "semantic-ui-react";

export const CustomerDetails = () => {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

  return (
    <div className="customerdetails">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" className="login1" color="teal">
            CUSTOMER DETAILS
          </Header>
          <form className="form">
            <Table celled className="table1">
              <Table.Row>
                <Table.Cell>
                  <Input className="input2" placeholder="Search..." />
                </Table.Cell>
                <Table.Cell className="dot">
                  ..............................................................
                </Table.Cell>
              </Table.Row>
            </Table>
            <br />
            <Table celled className="table-container">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Customer_ID</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Salary</Table.HeaderCell>
                  <Table.HeaderCell>Contact Numbers</Table.HeaderCell>
                  <Table.HeaderCell>NIC</Table.HeaderCell>
                  <Table.HeaderCell>Order_ID</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <br />
            <Button
              className="bt1"
              onClick={() => handleClick("/AddCustomer")}
            >
              Add New Customer
            </Button>
            <Button
              className="bt2"
              onClick={() => handleClick("/UpdateCustomer")}
            >
              Update & Delete Customer
            </Button>
          </form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
