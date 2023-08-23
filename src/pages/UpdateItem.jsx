import { useNavigate } from "react-router-dom"
export const UpdateItem = (props)=>{
    const navigate = useNavigate();

    function handleClick(route){
        navigate(route);
    }
    return(
        <div >
        
        <form className="form">
            
            <lable className="login1" for="login">Update & Delete ITEM</lable>
            <br/>
            <table>
                <tr>
                    <td>
                        <label> Item_ID </label>
                    </td>
                    <td>
                        <input className="input3" />
                    </td>
                    <td>
                        <label>Balance Quantity</label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                </tr>
                <tr className="dot">...............</tr>
                <tr>
                    <td>
                        <label>Name</label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                       
                    <td>
                        <label>Supplier price</label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                </tr>
                <tr className="dot">...............</tr>
                <tr>
                    <td>
                    <label> Measuring Unit </label>
                    </td>
                    <td>
                        <select className="dropdown">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3" onClick={()=>handleClick("/Main")}>Option 3</option>
                        </select>
                    
                    </td>
                    
                    
                    <td>
                        <label>Seller Price</label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                </tr>

                    <tr>           
            </tr>
            
            </table>

            <br></br>
            <table>
                <tr>
                    <td></td>
                    <td className="dot">.............................................................................................</td>
                    <td><button className = "bt3" >Update</button></td>
                    <td><button className = "bt3" >Clear</button></td>
                    <td><button className = "bt3" >Delete</button></td>
                    <td><button className = "bt3" >Back</button></td>
                </tr>
            </table>
        </form>
        </div>
    )



}