import { useNavigate } from "react-router-dom";
import { Input, Button, Table, Header, Grid } from "semantic-ui-react";

export const OrderDetails = () => {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

  return (
    <div className="orderdetails">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" className="login1" color= "teal">
            ORDER DETAILS
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
                  <Table.HeaderCell>Order_ID</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Items</Table.HeaderCell>
                  <Table.HeaderCell>Amount</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Total</Table.HeaderCell>
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
              onClick={() => handleClick("/AddOrder")}
            >
              Add New Order
            </Button>
            <Button
              className="bt2"
              onClick={() => handleClick("/UpdateOrder")}
            >
              Update & Delete Order
            </Button>
          </form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
