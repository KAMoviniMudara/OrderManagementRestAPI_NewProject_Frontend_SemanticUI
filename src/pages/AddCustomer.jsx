import { useNavigate } from "react-router-dom";
export const AddCustomer = (props)=>{
   
        const navigate = useNavigate();
      
        function handleClick (route){
          navigate(route);
        }
        return(
        <div >
        
        <form className="form">
            
            <lable className="login1" for="login">ADD CUSTOMER</lable>
            <br/>
            <table>
                <tr>
                    <td>
                        <label> Name </label>
                    </td>
                    <td>
                        <input className="input3" />
                    </td>
                    <td>
                        <label>Password </label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                </tr>
                <tr className="dot">...............</tr>
                <tr>
                    <td>
                        <label> Salary </label>
                    </td>
                    <td>
                        <input className="input3" />
                    </td>
                    <td>
                        <label>Address</label>
                    </td>
                    <td>
                        <input className="input3"/>
                    </td>
                </tr>
                <tr className="dot">...............</tr>
                <tr>
                    <td>
                        <label> Contact Numbers </label>
                    </td>
                    <td>
                        <input className="input3" />
                    </td>
                    <td>
                        <label>Order_ID</label>
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
                    <td><button className = "bt3" onClick={()=>handleClick("/Main")}>Back</button></td>
                </tr>
            </table>
        </form>
        </div>
    )
}