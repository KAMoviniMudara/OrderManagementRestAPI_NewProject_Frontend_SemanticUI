import { useNavigate } from "react-router-dom";
import { Input, Button, Table, Header, Grid } from "semantic-ui-react";

export const ItemDetails = () => {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

  return (
    <div className="itemdetails">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" className="login1" color= "teal" >
            ITEM DETAILS
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
                  <Table.HeaderCell>Item_ID</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Measuring Unit</Table.HeaderCell>
                  <Table.HeaderCell>Balance Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Supplier Price</Table.HeaderCell>
                  <Table.HeaderCell>Seller Price</Table.HeaderCell>
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
              onClick={() => handleClick("/AddItem")}
            >
              Add New Item
            </Button>
            <Button
              className="bt2"
              onClick={() => handleClick("/UpdateItem")}
            >
              Update & Delete Item
            </Button>
          </form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
