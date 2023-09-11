import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Form,
  Header,
  Input,
  Label,
  Table,
  Grid,
  Modal,
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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validateNumberInput = (input) => {
    return /^\d+$/.test(input);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
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
        setIsSuccessModalOpen(true);
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

  const navigateToMain = () => {
    navigate("/Main");
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: "600px" }}>
        <Form className="form">
          <Header as="h1" color="teal" textAlign="center">
            ADD NEW ORDER
          </Header>
          <Table basic="very" textAlign="left">
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label>Date</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Customers</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={customers}
                    onChange={(e) => setCustomers(e.target.value)}
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
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button.Group>
            <Button color="teal" type="submit" onClick={handleSave}>
              Save
            </Button>
            <Button.Or />
            <Button color="red" onClick={handleClear}>
              Clear
            </Button>
            <Button.Or />
            <Button color="yellow" onClick={navigateToMain}>
              Back
            </Button>
          </Button.Group>
        </Form>

        <Modal open={isSuccessModalOpen} onClose={handleCloseSuccessModal}>
          <Modal.Header>Order saved successfully</Modal.Header>
          <Modal.Content>
            <p>Your order has been saved successfully.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="teal" onClick={handleCloseSuccessModal}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  );
};
