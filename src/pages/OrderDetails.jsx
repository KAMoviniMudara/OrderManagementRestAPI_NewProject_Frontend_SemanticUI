import { useNavigate } from "react-router-dom";

export const OrderDetails = ()=>{
    const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

    return(
        <div className="orderdetails">
        
        <form className="form">
            <lable className="login1" for="login">ORDER DETAILS</lable>
            <br/> 
            <table className="table1">
                <tr>
                    <td><label>Search</label></td>
                    <td><input className="input2" placeholder="" /></td>
                    <td className="dot">..............................................................</td>
                </tr>
                 
            </table>       
                <br/>
            <table className="table-container">
                <tr>
                    
                        <th>Order_ID</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Total</th>
                   
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                        
            </table>
             
            
            <br></br>
        
            <table>
            <tr>
                <td>
                    <button 
                    className="bt1"
                    onClick={()=>handleClick("/AddOrder")}
                    >
                        Add New Order
                    </button>
                
                </td>
                <td>
                    <button 
                    className="bt2"
                    onClick={()=>handleClick("/UpdateOrder")}
                    >
                        Update & Delete Order
                    </button>
                </td>
            </tr>
            </table>
           
            
        </form>
        </div>
    )
}