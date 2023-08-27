import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const measuringUnitTypes = [
  "KILO_GRAM",
  "LITER",
  "GRAM",
  "MILI_GRAM",
  "NUMBER"
];

export const UpdateItem = (props) => {
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
      alert("Item Added Successful");
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
    <div>
      <form className="form" onSubmit={handleSubmit}>
      <lable className="login1" for="login">UPDATE & DELETE ITEM</lable>
        <br />
        <table>
          <tr>
            <td>
              <label> Name </label>
            </td>
            <td>
              <input
                className="input3"
                value={item_name}
                onChange={(event) => setItemName(event.target.value)}
              />
            </td>
            <td>
              <label> Measuring Unit </label>
            </td>
            <td>
              <select
                className="dropdown"
                value={measure_type}
                onChange={(event) => setMeasureType(event.target.value)}
              >
                <option value="">Select Measuring Unit</option>
                {measuringUnitTypes.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label>Balance Quantity</label>
            </td>
            <td>
              <input
                className="input3"
                value={balance_qty}
                onChange={(event) => setBalanceQty(event.target.value)}
              />
            </td>
            <td>
              <label>Supplier price</label>
            </td>
            <td>
              <input
                className="input3"
                value={supplier_price}
                onChange={(event) => setSupplierPrice(event.target.value)}
              />
            </td>
          </tr>
          <tr className="dot">...............</tr>
          <tr>
            <td>
              <label>Seller Price</label>
            </td>
            <td>
              <input
                className="input3"
                value={seller_price}
                onChange={(event) => setSellerPrice(event.target.value)}
              />
            </td>
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
                Save
              </button>
            </td>
            <td>
              <button className="bt3" onClick={handleClear}>
                Clear
              </button>
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
