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

export const UpdateCustomer = (props) => {
  const navigate = useNavigate();

  const [customer_name, setCustomerName] = useState("");
  const [customer_address, setCustomerAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [contact_numbers, setContactNumbers] = useState([]);
  const [nic, setNic] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validateNumberInput = (input) => {
    return /^\d+$/.test(input);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setCustomerName("");
    setCustomerAddress("");
    setSalary("");
    setContactNumbers([]);
    setNic("");
  };

  const handleDeactivate = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to deactivate this customer?")) {
      try {
        const response = await axios.patch(
          `http://localhost:8087/api/v1/customer/deactivate-customer-by-name`,
          {
            customerName: customer_name,
          }
        );

        if (response.data === "Customer Deactivated") {
          alert("Customer Deactivated Successfully");
        } else {
          alert("Customer Deactivation Failed");
        }
      } catch (err) {
        alert("Customer Deactivation Failed");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateNumberInput(salary)) {
      alert("Please enter a valid numeric value for salary.");
      return;
    }

    try {
      await axios.post("http://localhost:8088/api/v1/customer/update-by-name", {
        customerName: customer_name,
        customerAddress: customer_address,
        salary: salary,
        contactNumbers: contact_numbers,
        nic: nic,
        activeState: true,
      });
      setIsSuccessModalOpen(true); // Open success modal
      setCustomerName("");
      setCustomerAddress("");
      setSalary("");
      setContactNumbers([]);
      setNic("");
    } catch (err) {
      alert("Customer Update Failed");
    }
  };

  const handleAddPhoneNumber = () => {
    setContactNumbers([...contact_numbers, ""]);
  };

  const handlePhoneNumberChange = (event, index) => {
    const inputPhoneNumber = event.target.value;
    if (/^[0-9]*$/.test(inputPhoneNumber)) {
      if (inputPhoneNumber.length <= 10) {
        const newContactNumbers = [...contact_numbers];
        newContactNumbers[index] = inputPhoneNumber;
        setContactNumbers(newContactNumbers);
      } else {
        alert("There are only 10 digits for phone number");
      }
    } else {
      alert("Please enter numbers only for phone number");
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
            UPDATE & DELETE CUSTOMER
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
                        value={customer_name}
                        onChange={(event) => setCustomerName(event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Address</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={customer_address}
                        onChange={(event) => setCustomerAddress(event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Salary</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={salary}
                        onChange={(event) => setSalary(event.target.value)}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>Contact Numbers</label>
                    </Table.Cell>
                    <Table.Cell colSpan={3}>
                      {contact_numbers.map((number, index) => (
                        <Input
                          key={index}
                          className="input3"
                          value={number}
                          onChange={(event) => handlePhoneNumberChange(event, index)}
                        />
                      ))}
                      <Button type="button" onClick={handleAddPhoneNumber}>
                        Add Contact Number
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <label>NIC</label>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        className="input3"
                        value={nic}
                        onChange={(event) => setNic(event.target.value)}
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

      <Modal open={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <Modal.Header>Customer Update Successful</Modal.Header>
        <Modal.Content>
          <p>The customer has been updated successfully.</p>
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
