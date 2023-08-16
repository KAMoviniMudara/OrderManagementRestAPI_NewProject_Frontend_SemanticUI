export const Login = (props)=>{
    return(
        <div className="login">
        
        <form className="form">
            <lable className="login1" for="login">LOGIN</lable>
            <br> 
            </br>
            <label htmlFor="username">User Name </label>
            <input type="username" placeholder="abc@123" id="username" name="username"/>
            <label htmlFor="password">Password </label>
            <input type="password" placeholder="**********" id="password" name="password"/>
            <button onClick={() => props.onFormSwitch('register')}>Login</button>
            
        </form>
        </div>
    )
}