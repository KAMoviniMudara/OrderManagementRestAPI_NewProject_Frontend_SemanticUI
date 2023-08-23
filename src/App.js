import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { CustomerDetails } from './pages/CustomerDetails';
import { AddCustomer } from './pages/AddCustomer';
import { UpdateCustomer } from './pages/UpdateCustomer';
import { OrderDetails} from './pages/OrderDetails';
import { AddOrder } from './pages/AddOrder';
import { UpdateOrder } from './pages/UpdateOrder';
import { ItemDetails } from './pages/ItemDetails';
import { AddItem } from './pages/AddItem';
import { UpdateItem } from './pages/UpdateItem'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/main" element={<Main/>}/>

          <Route path="/customerdetails" element={<CustomerDetails/>}/>
          <Route path="/addcustomer" element={<AddCustomer/>}/>
          <Route path="/updatecustomer" element={<UpdateCustomer/>}/>

          <Route path="/orderdetails" element={<OrderDetails/>}/>
          <Route path="/addorder" element={<AddOrder/>}/>
          <Route path="/updateorder" element={<UpdateOrder/>}/>

          <Route path="/itemdetails" element={<ItemDetails/>}/>
           <Route path="/additem" element={<AddItem/>}/>
          <Route path="/updateitem" element={<UpdateItem/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
