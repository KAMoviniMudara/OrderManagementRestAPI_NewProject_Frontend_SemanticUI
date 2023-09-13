import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Form, Header, Input, Label, Table, Grid, Modal, Select } from "semantic-ui-react";

export const AddOrder = (props) => {
  const navigate = useNavigate();

  // State for form fields
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [customers, setCustomers] = useState("");
  const [amount, setAmount] = useState("");
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState("");
  const [orders, setOrders] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // State for item names fetched from the backend
  const [itemNames, setItemNames] = useState([]);

  // Function to handle form submission
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
        handleClear();
      })
      .catch((error) => {
        alert("Failed to save order");
      });
  };

  // Function to clear form fields
  const handleClear = () => {
    setCustomers("");
    setDate(new Date().toISOString().split("T")[0]);
    setAmount("");
    setQuantity("");
    setItems("");
    setItemName("");
    setTotal("");
  };

  const navigateToMain = () => {
    navigate("/Main");
  };

  // Fetch item names from the backend when the component mounts
  useEffect(() => {
    console.log("Fetching item names...");
    axios
      .get("http:/localhost:8087/api/v1/item/names")
      .then((response) => {
        const itemNamesFromServer = response.data.itemNames;
        console.log("Fetched item names:", itemNamesFromServer);
        setItemNames(itemNamesFromServer);
      })
      .catch((error) => {
        console.error("Failed to fetch item names", error);
      });
  }, []);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: "1200px" }}>
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
                  <Input fluid value={date} onChange={(e) => setDate(e.target.value)} />
                </Table.Cell>
                <Table.Cell>
                  <Label>Customers</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input fluid value={customers} onChange={(e) => setCustomers(e.target.value)} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Amount</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input fluid value={amount} onChange={(e) => setAmount(e.target.value)} />
                </Table.Cell>
                <Table.Cell>
                  <Label>Quantity</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input fluid value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>ItemName</Label>
                </Table.Cell>
                <Table.Cell>
                  <Select
                    fluid
                    options={itemNames.map((name) => ({
                      key: name,
                      text: name,
                      value: name,
                    }))}
                    value={itemName}
                    onChange={(event, { value }) => setItemName(value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Items</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input fluid value={items} onChange={(e) => setItems(e.target.value)} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Orders</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input fluid value={orders} onChange={(e) => setOrders(e.target.value)} />
                </Table.Cell>
                <Table.Cell>
                  <Label>Total</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input fluid value={total} onChange={(e) => setTotal(e.target.value)} />
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

        <Modal open={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
          <Modal.Header>Order saved successfully</Modal.Header>
          <Modal.Content>
            <p>Your order has been saved successfully.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="teal" onClick={() => setIsSuccessModalOpen(false)}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  );
};
