import { useNavigate } from "react-router-dom" 
export const AddOrder = (props)=>{
    const navigate = useNavigate();
      
        function handleClick (route){
          navigate(route);
        }
    
    return(
        <div >
        
        <form className="form">
            
            <lable className="login1" for="login">ADD NEW ORDER</lable>
            <br/>
            <table>
                <tr>
                    <td>
                        <label>Date</label>
                    </td>
                    <td>
                        <input className="input3" />
                    </td>
                   
                    <td>
                        <label> </label>
                    </td>
            
                </tr>
                <tr className="dot">...............</tr>
                <tr>
                    <td>
                        <label>Amount</label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                       
                    <td>
                        <label>Quantity</label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                </tr>
                <tr className="dot">...............</tr>
                <tr>
                    <td>
                    <label> Items </label>
                    </td>
                    <td>
                        <select className="dropdown">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3"  onClick={()=>handleClick("/Main")}>Option 3</option>
                        </select>
                    
                    </td>
                    
                    
                    <td>
                        <label>Total</label>
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
                    <td className="dot">........................................................................................................................</td>
                    <td><button className = "bt3" >Save</button></td>
                    <td><button className = "bt3" >Clear</button></td>
                    <td><button className = "bt3"  onClick={()=>handleClick("/Main")} >Back</button></td>
                </tr>
            </table>
        </form>
        </div>
    )}
