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
  Dropdown,
  Modal,
} from "semantic-ui-react";

const measuringUnitTypes = [
  { key: "KILO_GRAM", text: "KILO_GRAM", value: "KILO_GRAM" },
  { key: "LITER", text: "LITER", value: "LITER" },
  { key: "GRAM", text: "GRAM", value: "GRAM" },
  { key: "MILI_GRAM", text: "MILI_GRAM", value: "MILI_GRAM" },
  { key: "NUMBER", text: "NUMBER", value: "NUMBER" },
];

export const UpdateItem = (props) => {
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

  const handleDeactivate = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to deactivate this item?")) {
      try {
        const response = await axios.patch(
          `http://localhost:8088/api/v1/item/deactivate-item-by-name`,
          {
            itemName: item_name,
          }
        );

        if (response.data === "Item Deactivated") {
          alert("Item Deactivated Successfully");
        } else {
          alert("Item Deactivation Failed");
        }
      } catch (err) {
        alert("Item Deactivation Failed");
      }
    }
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
      await axios.post("http://localhost:8087/api/v1/item/update-by-name", {
        itemName: item_name,
        measuringUnitType: measure_type,
        balanceQty: balance_qty,
        supplierPrice: supplier_price,
        sellerPrice: seller_price,
        activeState: true,
      });
      setIsSuccessModalOpen(true); // Open success modal
      setItemName("");
      setBalanceQty("");
      setSupplierPrice("");
      setSellerPrice("");
      setMeasureType("");
    } catch (err) {
      alert("Item update Failed");
    }
  };

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" className="login1" color="teal">
            UPDATE & DELETE ITEM
          </Header>
          <Form className="form" onSubmit={handleSubmit}>
            <Segment>
              <Table basic="very" celled>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <label>Name</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={item_name}
                        onChange={(event) => setItemName(event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Measuring Unit</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Dropdown
                        className="dropdown"
                        selection
                        value={measure_type}
                        options={measuringUnitTypes}
                        onChange={(event, data) => setMeasureType(data.value)}
                        placeholder="Select Measuring Unit"
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Balance Quantity</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={balance_qty}
                        onChange={(event) => setBalanceQty(event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Supplier Price</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={supplier_price}
                        onChange={(event) => setSupplierPrice(event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Seller Price</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={seller_price}
                        onChange={(event) => setSellerPrice(event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>

            <Table.Cell>
              <Button color="red" onClick={handleClear}>
                Clear
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button color="teal" type="submit">
                Update
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button color="orange" onClick={handleDeactivate}>
                Delete
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button color="blue" onClick={() => handleClick("/Main")}>
                Back
              </Button>
            </Table.Cell>
          </Form>
        </Grid.Column>
      </Grid>

      {/* Success Modal */}
      <Modal
        open={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      >
        <Modal.Header>Item Update Successful</Modal.Header>
        <Modal.Content>
          <p>The item has been updated successfully.</p>
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
