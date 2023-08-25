import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const UpdateCustomer = (props) => {
  const navigate = useNavigate();

  const [customer_name, setCustomerName] = useState("");
  const [customer_address, setCustomerAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [contact_numbers, setContactNumbers] = useState([]);
  const [nic, setNic] = useState("");

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

  
  const handleDeactivate = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to deactivate this customer?")) {
      try {
        const response = await axios.patch(
          `http://localhost:8087/api/v1/customer/deactivate-customer-by-name`,
          {
            customerName: customer_name, // Send the customer name to the server
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
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (contact_numbers.every((number) => number.length === 10)) {
      try {
        await axios.post("http://localhost:8087/api/v1/customer/update-by-name", {
          customerName: customer_name,
          customerAddress: customer_address,
          salary: salary,
          contactNumbers: contact_numbers,
          nic: nic,
          activeState: true,
        });
        alert("Customer Update Successful");
        setCustomerName("");
        setCustomerAddress("");
        setSalary("");
        setContactNumbers([]);
        setNic("");
      } catch (err) {
        alert("Customer Update Failed");
      }
    } else {
      alert("Please enter exactly 10 digits for all phone numbers");
    }
  }

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <lable className="login1" htmlFor="login">
          UPDATE & DELETE CUSTOMER
        </lable>
        <br />
        <table>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label>Name</label>
            </td>
            <td>
              <input
                className="input3"
                value={customer_name}
                onChange={(event) => setCustomerName(event.target.value)}
              />
            </td>
            <td>
              <label>Address</label>
            </td>
            <td>
              <input
                className="input3"
                value={customer_address}
                onChange={(event) => setCustomerAddress(event.target.value)}
              />
            </td>
          </tr>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label> NIC </label>
            </td>
            <td>
              <input
                className="input3"
                value={nic}
                onChange={handleNicChange}
              />
            </td>
            <td>
              <label>Salary</label>
            </td>
            <td>
              <input
                className="input3"
                value={salary}
                onChange={handleSalaryChange}
              />
            </td>
           
          </tr>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label> Contact Numbers </label>
            </td>
            <td colSpan="3">
              {contact_numbers.map((number, index) => (
                <input
                  key={index}
                  className="input3"
                  value={number}
                  onChange={(event) => handlePhoneNumberChange(event, index)}
                />
              ))}
              <button type="button" onClick={handleAddPhoneNumber}>
                Add Contact Number
              </button>
            </td>
          </tr>
          <tr>
           
          </tr>
        </table>
        <br />
        <table>
          <tr>
            <td></td>
            <td className="dot">
              ........................................................................................................................
            </td>
            <td>
              <button className="bt3" type="submit">
                Update
              </button>
            </td>
            <td>
              <button className="bt3" onClick={handleClear}>Clear</button>
            </td>
            <td>
              <button className="bt3" onClick={handleDeactivate}>Delete</button>
            </td>
            <td>
              <button className="bt3" onClick={() => handleClick("/Main")}>
                Back
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
