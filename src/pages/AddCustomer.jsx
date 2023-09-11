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
  Modal,
} from "semantic-ui-react";

export const AddCustomer = (props) => {
  const navigate = useNavigate();

  const [customer_name, setCustomerName] = useState("");
  const [customer_address, setCustomerAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [contact_numbers, setContactNumbers] = useState([]);
  const [nic, setNic] = useState("");

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleNicChange = (event) => {
    const inputNic = event.target.value;
    if (inputNic.length <= 10) {
      setNic(inputNic);
    } else {
      alert("There are only 10 digits for NIC");
    }
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

  const handleSalaryChange = (event) => {
    const inputSalary = event.target.value;
    if (/^[0-9]*$/.test(inputSalary)) {
      setSalary(inputSalary);
    } else {
      alert("Please enter numbers only for salary");
    }
  };

  const handleAddPhoneNumber = () => {
    setContactNumbers([...contact_numbers, ""]);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setCustomerName("");
    setCustomerAddress("");
    setSalary("");
    setContactNumbers([]);
    setNic("");
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (contact_numbers.every((number) => number.length === 10)) {
      try {
        await axios.post("http://localhost:8087/api/v1/customer/save", {
          customerName: customer_name,
          customerAddress: customer_address,
          salary: salary,
          contactNumbers: contact_numbers,
          nic: nic,
          activeState: true,
        });
        setIsSuccessModalOpen(true);
        setCustomerName("");
        setCustomerAddress("");
        setSalary("");
        setContactNumbers([]);
        setNic("");
      } catch (err) {
        alert("Customer Registration Failed");
      }
    } else {
      alert("Please enter exactly 10 digits for all phone numbers");
    }
  }

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
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
            ADD NEW CUSTOMER
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
                    value={customer_name}
                    onChange={(event) => setCustomerName(event.target.value)}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
                <Table.Cell width={2}>
                  <Label>Address</Label>
                </Table.Cell>
                <Table.Cell width={6}>
                  <Input
                    fluid
                    value={customer_address}
                    onChange={(event) =>
                      setCustomerAddress(event.target.value)
                    }
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>NIC</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={nic}
                    onChange={handleNicChange}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Label>Salary</Label>
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    value={salary}
                    onChange={handleSalaryChange}
                    style={{ fontSize: "20px" }}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label>Contact Numbers</Label>
                </Table.Cell>
                <Table.Cell colSpan={3}>
                  {contact_numbers.map((number, index) => (
                    <Input
                      key={index}
                      fluid
                      value={number}
                      onChange={(event) =>
                        handlePhoneNumberChange(event, index)
                      }
                      style={{ fontSize: "20px" }}
                    />
                  ))}
                  <Button type="button" onClick={handleAddPhoneNumber}>
                    Add Contact Number
                  </Button>
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
          </Button.Group>
          <Button color="yellow" onClick={() => handleClick("/Main")}>
            Back
          </Button>
        </Form>
      </Grid.Column>

      <Modal open={isSuccessModalOpen} onClose={handleCloseSuccessModal}>
        <Modal.Header>Customer Registration Successful</Modal.Header>
        <Modal.Content>
          <p>Your customer has been registered successfully.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="teal" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </Grid>
  );
};
