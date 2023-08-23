import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

  return (
    <div className="main">
      <form className="form">
        <label className="login1" htmlFor="login">
          CUSTOMER MANAGEMENT SYSTEM
        </label>
        <br />
        <input className="input2" placeholder="User Name" />
        <br />
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  className="bt1"
                  onClick={() => handleClick("/CustomerDetails")}
                >
                  Customer Details
                </button>
              </td>
              <td>
                <button
                  className="bt1"
                  onClick={() => handleClick("/OrderDetails")}
                >
                  Order Details
                </button>
              </td>
              <td>
                <button
                  className="bt1"
                  onClick={() => handleClick("/ItemDetails")}
                >
                  Item Details
                </button>
              </td>
            </tr>
            <br/>
            <br/>
            <br/>
            <tr>
                <td className="dot">..........................................</td>
              <td colSpan="3">
                <button className="loginbt">Logout</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
