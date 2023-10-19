import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Table,
  Input,
  Button,
  Segment,
  Grid,
  Form,
  Modal,
} from "semantic-ui-react";

export const UpdateOrder = (props) => {
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
      .post("http://localhost:8088/api/v1/order/save", orderData)
      .then((response) => {
        setIsSuccessModalOpen(true); // Open success modal
        handleClear(); // Clear the form fields after a successful save
      })
      .catch((error) => {
        alert("Failed to save the order");
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
    setOrders("");
  };

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" className="login1" color="teal">
            UPDATE ORDER
          </Header>
          <Form className="form">
            <Segment>
              <Table basic="very" celled>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <label>Date</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <label>Customers</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={customers}
                        onChange={(e) => setCustomers(e.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Amount</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <label>Quantity</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Item Name</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <label>Items</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={items}
                        onChange={(e) => setItems(e.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Orders</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={orders}
                        onChange={(e) => setOrders(e.target.value)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <label>Total</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
            <Table.Row>
              <Table.Cell>
                <Button color="teal" onClick={handleSave}>
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="red" onClick={handleClear}>
                  Clear
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="blue" onClick={() => handleClick("/Main")}>
                  Back
                </Button>
              </Table.Cell>
            </Table.Row>
          </Form>
        </Grid.Column>
      </Grid>
      
      <Modal open={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <Modal.Header>Order Update Successful</Modal.Header>
        <Modal.Content>
          <p>The order has been updated successfully.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="teal" onClick={() => setIsSuccessModalOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
