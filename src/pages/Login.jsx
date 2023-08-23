import { useNavigate } from "react-router-dom"

export const Login = ()=>{
const navigate = useNavigate();

function handleClick(){
    navigate("/Main")
}
    return(
        <div className="login">
        
        <form className="form">
            <lable className="login1" for="login">LOGIN</lable>
            <br/>
            <label htmlFor="username">User Name </label>

            <input className="input1" type="username" placeholder="abc@123" id="username" name="username"/>
            <label htmlFor="password">Password </label>
            <input className="input1" type="password" placeholder="**********" id="password" name="password"/>
            <button className = "loginbt" onClick={(e)=>handleClick()}>Login</button>
            
        </form>
        </div>
    )
}