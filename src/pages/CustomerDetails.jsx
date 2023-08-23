import { useNavigate } from "react-router-dom";
export const CustomerDetails = ()=>{
    const navigate = useNavigate();

    function handleClick(route){
        navigate(route);
    }
    return(
        <div className="customerdetails">
        
        <form className="form">
            <lable className="login1" for="login">CUSTOMER DETAILS</lable>
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
                    
                        <th>Customer_ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Contact Numbers</th>
                        <th>NIC</th>
                        <th>Order_ID</th>
                   
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
                    onClick={()=>handleClick("/AddCustomer")}
                    >
                        Add New Customer
                    </button>
                
                </td>
                <td>
                    <button 
                    className="bt2"
                    onClick={()=>handleClick("/UpdateCustomer")}
                    >
                        Update & Delete Customer
                    </button>
                </td>
            </tr>
            </table>
           
            
        </form>
        </div>
    )
}