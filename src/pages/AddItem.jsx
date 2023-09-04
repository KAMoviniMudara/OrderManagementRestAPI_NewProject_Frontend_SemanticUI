import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Header,
  Table,
  Label,
  Grid,
  Select,
} from "semantic-ui-react";

const measuringUnitTypes = [
  "KILO_GRAM",
  "LITER",
  "GRAM",
  "MILI_GRAM",
  "NUMBER",
];

export const AddItem = (props) => {
  const navigate = useNavigate();

  const [item_name, setItemName] = useState("");
  const [balance_qty, setBalanceQty] = useState("");
  const [supplier_price, setSupplierPrice] = useState("");
  const [seller_price, setSellerPrice] = useState("");
  const [measure_type, setMeasureType] = useState("");

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
        balanceQty: balance_qty,
        supplierPrice: supplier_price,
        sellerPrice: seller_price,
        activeState: true,
      });
      alert("Item Added Successfully");
      setItemName("");
      setBalanceQty("");
      setSupplierPrice("");
      setSellerPrice("");
      setMeasureType("");
    } catch (err) {
      alert("Item Added Failed");
    }
  };

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", fontSize: "50px" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: "1520px" }}>
        <Form className="form" onSubmit={handleSubmit}>
          <Header as="h1" color="teal" textAlign="center">
            ADD NEW ITEM
          </Header>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={2}>
                  <Label>Name</Label>
                </Table.Cell>
                <Table.Cell width={6}>
                  <Input
                    fluid
                    value={item_name}
                    onChange={(event) => setItemName(event.target.value)}
                    style={{ fontSize: "20px" }} // Adjust the font size
                  />
                </Table.Cell>
                <Table.Cell width={2}>
                  <Label>Measuring Unit</Label>
                </Table.Cell>
                <Table.Cell width={6}>
                  <Select
                    fluid
                    options={measuringUnitTypes.map((unit) => ({
                      key: unit,
                      text: unit,
                      value: unit,
                    }))}
                    value={measure_type}
                    onChange={(event, { value }) => setMeasureType(value)}
                    style={{ fontSize: "20px" }} // Adjust the font size
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
                    style={{ fontSize: "20px" }} // Adjust the font size
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Supplier Price</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={supplier_price}
                    onChange={(event) => setSupplierPrice(event.target.value)}
                    style={{ fontSize: "20px" }} // Adjust the font size
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
                    style={{ fontSize: "20px" }} // Adjust the font size
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button.Group>
            <Button type="submit" color="teal">
              Save
            </Button>
            <Button.Or />
            <Button color="red" onClick={handleClear}>
              Clear
            </Button>
            <Button.Or />
            <Button color="teal" onClick={() => handleClick("/Main")}>
              Back
            </Button>
          </Button.Group>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
