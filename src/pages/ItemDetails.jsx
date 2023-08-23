import { useNavigate } from "react-router-dom";

export const ItemDetails = ()=>{
    const navigate = useNavigate();

    function handleClick(route) {
        navigate(route);
    }

    return(
        <div className="itemdetails">
        
        <form className="form">
            <lable className="login1" for="login">ITEM DETAILS</lable>
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
                    
                        <th>Item_ID</th>
                        <th>Name</th>
                        <th>Measuring Unit</th>
                        <th>Balance Quantity</th>
                        <th>Supplier Price</th>
                        <th>Seller Price</th>
                   
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
                    onClick={() => handleClick("/AddItem")}
                    >
                        Add New Item
                    </button>
                
                </td>
                <td>
                    <button 
                    className="bt2"
                    onClick={() => handleClick("/UpdateItem")}
                    >
                        Update & Delete Item
                    </button>
                </td>
            </tr>
            </table>
           
            
        </form>
        </div>
    )
}