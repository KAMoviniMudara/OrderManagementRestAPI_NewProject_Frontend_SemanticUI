export const Main = ()=>{
    return(
        <div className="main">
        
        <form className="form">
            <lable className="login1" for="login">CUSTOMER MANAGEMENT SYSTEM</lable>
            <br/>  
            <input className="input2" placeholder="User Name" />
            <br></br>
            <table><tr><th>
            <button className="bt1">Customer Details</button><br/><br></br>
            <button className="bt1">Order Details</button><br></br><br></br>
            <button className="bt1">Item Details</button><br></br><br></br>
            <button className="logoutbt">Logout</button>
            </th>
            <input className="input3" placeholder="Selected Page should be loaded here" />
            
            </tr>
            </table>
        </form>
        </div>
    )
}