import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Form,
  Input,
  Header,
  Table,
  Label,
  Grid,
} from "semantic-ui-react";

export const AddOrder = (props) => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState("");
  const [orders, setOrders] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");

  const navigateToMain = () => {
    navigate("/Main");
  };

  const handleSave = (event) => {
    event.preventDefault();

    const orderData = {
      customers: customers,
      date: date,
      orderDetails: [
        {
          amount: amount,
          itemName: itemName,
          items: items,
          orders: orders,
          qty: quantity,
        },
      ],
      total: total,
    };

    axios
      .post("http://localhost:8087/api/v1/order/save", orderData)
      .then((response) => {
        alert("Order saved successfully");
        handleClear(); // Clear the form fields after successful save
      })
      .catch((error) => {
        alert("Failed to save order");
      });
  };

  const handleClear = () => {
    setCustomers("");
    setDate("");
    setAmount("");
    setQuantity("");
    setItems("");
    setItemName("");
    setTotal("");
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", fontSize: "50px" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: "1520px" }}>
        <Form className="form">
          <Header as="h1" color="teal" textAlign="center">
            ADD NEW ORDER
          </Header>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={2}>
                  <Label>Date</Label>
                </Table.Cell>
                <Table.Cell width={6}>
                  <Input
                    fluid
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
                <Table.Cell width={2}>
                  <Label>Customers</Label>
                </Table.Cell>
                <Table.Cell width={6}>
                  <Input
                    fluid
                    value={customers}
                    onChange={(e) => setCustomers(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Amount</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Quantity</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>ItemName</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Items</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={items}
                    onChange={(e) => setItems(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Orders</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={orders}
                    onChange={(e) => setOrders(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Total</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button.Group>
            <Button onClick={handleSave} color="teal">
              Save
            </Button>
            <Button.Or />
            <Button onClick={handleClear} color="red">
              Clear
            </Button>
            <Button.Or />
            <Button onClick={navigateToMain} color="teal">
              Back
            </Button>
          </Button.Group>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
