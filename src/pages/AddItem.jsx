import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Form,
  Header,
  Input,
  Label,
  Select,
  Table,
  Modal,
  Grid,
} from "semantic-ui-react";

const measuringUnitTypes = [
  { key: "KILO_GRAM", text: "KILO_GRAM", value: "KILO_GRAM" },
  { key: "LITER", text: "LITER", value: "LITER" },
  { key: "GRAM", text: "GRAM", value: "GRAM" },
  { key: "MILI_GRAM", text: "MILI_GRAM", value: "MILI_GRAM" },
  { key: "NUMBER", text: "NUMBER", value: "NUMBER" },
];

export const AddItem = (props) => {
  const navigate = useNavigate();

  const [item_name, setItemName] = useState("");
  const [balance_qty, setBalanceQty] = useState("");
  const [supplier_price, setSupplierPrice] = useState("");
  const [seller_price, setSellerPrice] = useState("");
  const [measure_type, setMeasureType] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validateNumberInput = (input) => {
    return /^\d+$/.test(input);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setItemName("");
    setBalanceQty("");
    setSupplierPrice("");
    setSellerPrice("");
    setMeasureType("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !validateNumberInput(balance_qty) ||
      !validateNumberInput(supplier_price) ||
      !validateNumberInput(seller_price)
    ) {
      alert("Please enter valid numeric values for quantity and prices.");
      return;
    }

    try {
      await axios.post("http://localhost:8087/api/v1/item/save", {
        itemName: item_name,
        measuringUnitType: measure_type,
        balanceQty: parseInt(balance_qty),
        supplierPrice: parseFloat(supplier_price),
        sellerPrice: parseFloat(seller_price),
        activeState: 1,
      });
      setIsSuccessModalOpen(true);
      setItemName("");
      setBalanceQty("");
      setSupplierPrice("");
      setSellerPrice("");
      setMeasureType("");

      setTimeout(() => {
        setIsSuccessModalOpen(false); // Close the success message after 3 seconds
      }, 3000);
    } catch (err) {
      alert("Item Added Failed");
    }
  };

   const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: "1200px" }}>
        <Form className="form" onSubmit={handleSubmit}>
          <Header as="h2" color="teal" textAlign="center">
            ADD NEW ITEM
          </Header>
          <Table basic="very" textAlign="left">
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label> Name </Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={item_name}
                    onChange={(event) => setItemName(event.target.value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label> Measuring Unit </Label>
                </Table.Cell>
                <Table.Cell>
                  <Select
                    fluid
                    options={measuringUnitTypes}
                    value={measure_type}
                    onChange={(event, { value }) => setMeasureType(value)}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Balance Quantity</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={balance_qty}
                    onChange={(event) => setBalanceQty(event.target.value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Supplier Price</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={supplier_price}
                    onChange={(event) =>
                      setSupplierPrice(event.target.value)
                    }
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Seller Price</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={seller_price}
                    onChange={(event) => setSellerPrice(event.target.value)}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button.Group>
            <Button color="teal" type="submit">
              Save
            </Button>
            <Button.Or />
            <Button color="red" onClick={handleClear}>
              Clear
            </Button>
            <Button.Or />
            <Button color="yellow" onClick={() => handleClick("/Main")}>
              Back
            </Button>
          </Button.Group>
        </Form>

         <Modal open={isSuccessModalOpen} onClose={handleCloseSuccessModal}>
        <Modal.Header>Item Registration Successful</Modal.Header>
        <Modal.Content>
          <p>Your item has been registered successfully.</p>
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
