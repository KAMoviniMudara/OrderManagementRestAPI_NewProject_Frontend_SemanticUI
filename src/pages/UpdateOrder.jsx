import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UpdateOrder = (props) => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [itemName, setItemName] = useState("");
  const [items,setItems] = useState("");
  const [orders,setOrders] = useState("");
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
    setOrders("");
  };

  return (
    <div>
      <form className="form">
      <lable className="login1" for="login">Update Order</lable>
        <br />
        <table>
          <tr>
            <td>
              <label>Date</label>
            </td>
            <td>
              <input
                className="input3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>
            <td>
              <label> Customers </label>
            </td>
            <input
                className="input3"
                value={customers}
                onChange={(e) => setCustomers(e.target.value)}
              />
           
          </tr>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label>Amount</label>
            </td>
            <td>
              <input
                className="input3"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
            <td>
              <label>Quantity</label>
            </td>
            <td>
              <input
                className="input3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </td>
          </tr>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label>ItemName</label>
            </td>
            <td>
              <input
                className="input3"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </td>
            <td>
              <label>Items</label>
            </td>
            <td>
              <input
                className="input3"
                value={items}
                onChange={(e) => setItems(e.target.value)}
              />
            </td>
          </tr>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label>Orders</label>
            </td>
            <td>
              <input
                className="input3"
                value={orders}
                onChange={(e) => setOrders(e.target.value)}
              />
            </td>
            <td>
              <label>Total</label>
            </td>
            <td>
              <input
                className="input3"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <br />
        <table>
          <tr>
            <td></td>
            <td className="dot">
              ..........................................................
            </td>
            <td>
              <button className="bt3" onClick={handleSave}>
                Update
              </button>
            </td>
            <td>
              <button className="bt3" onClick={handleClear}>
                Clear
              </button>
            </td>
            <td>
              <button className="bt3" onClick={navigateToMain}>
                Back
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};


