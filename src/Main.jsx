export const Main = ()=>{
    return(
        <div className="main">
        
        <form className="form">
            <lable className="login1" for="login">CUSTOMER MANAGEMENT SYSTEM</lable>
            <br> 
            </br>
            <label htmlFor="username">User Name </label>
            <input type="username" placeholder="abc@123" id="username" name="username"/>
            <label htmlFor="password">Password </label>
            <input type="password" placeholder="**********" id="password" name="password"/>
            <button className="loginbt">Logout</button>
            
        </form>
        </div>
    )
}