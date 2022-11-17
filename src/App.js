
import './App.css';
import Banner from './Components/Home/Banner';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Logout from './Components/Login/Logout';
import Home from './Components/Home/Home';
import AdminHome from './Components/Admin/AdminHome';
import Admins from './Components/Admin/Admins';
import AddAdmin from './Components/Admin/AddAdmin';
import UpdateAdmin from './Components/Admin/UpdateAdmin';
import DeleteAdmin from './Components/Admin/DeleteAdmin';

//Routing for Cab Components
import CabHome from './Components/Cab/CabHome';
import Cabs from './Components/Cab/Cabs';
import Cab from './Components/Cab/Cab';
import DeleteCab from './Components/Cab/DeleteCab';
import AddCab from './Components/Cab/AddCab';
import UpdateCab from './Components/Cab/UpdateCab';
import CabType from './Components/Cab/CabType';

//Routing for Customer Component
import CustomerHome from './Components/Customer/CustomerHome';
import Customers from './Components/Customer/Customers';
import AddCustomer from './Components/Customer/AddCustomers';
import Customer from './Components/Customer/Customer'
import DeleteCustomer from './Components/Customer/DeleteCustomer';
import UpdateCustomer from './Components/Customer/UpdateCustomer';

//Routing for Driver Components
import DriverHome from './Components/Driver/DriverHome';
import UpdateDriver from "./Components/Driver/UpdateDriver";
import Drivers from "./Components/Driver/Drivers";
import DriverTable from "./Components/Driver/DriverTable";
import DeleteDriver from "./Components/Driver/DeleteDriver";
import Driver from "./Components/Driver/Driver";
import AddDriver from "./Components/Driver/AddDriver";

import Footer from './Components/Home/Footer';

import CustomerLogin from './Components/Login/CustomerLogin';
import Main2 from './Components/Home/Main2';
import AboutSection from './Components/Home/AboutSection';
import CustomerLoginHome from './Components/Design/CustomeLoginHome';
import AddTrips from './Components/TripBooking/AddTrips';
import CustomerTrips from './Components/TripBooking/CustomerTrips';
import Trip from './Components/TripBooking/Trip';
import Trips from './Components/TripBooking/Trips';
import DeleteTrips from './Components/TripBooking/DeleteTrips';
import UpdateTripBooking from './Components/TripBooking/UpdateTripBooking';
import CabDetailsForCustomer from './Components/Cab/CabDetailsForCustomer';
import TripBookingHome from './Components/TripBooking/TripBookingHome';

function App() {
  const data = {
    title:"Admin Login",
    userName: "username",
    password: "password"
  }
  const name = "use-context-test";


  const data1 = {
    title:"Customer Login",
    userName: "username",
    password: "password"
  }
  

  return (
    <div>
          
          <Banner /> 
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main2/>}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/main' element={<Main2/>}></Route>
            <Route path='/customerlogin' element={<CustomerLogin data={data1}/>}></Route>
            <Route path='/about' element={<AboutSection/>}></Route>
            <Route path='/login' element={<Login data={data}/>}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/home1' element={<CustomerLoginHome/>}></Route>
            <Route path='/addtripbooking' element={<AddTrips/>}></Route>
            <Route path='/showtrips' element={<CustomerTrips/>}></Route>
            <Route path='/adminHome' element={<AdminHome />}></Route>

            <Route path='/cab' element={<CabHome />}></Route>
            <Route path='/cabs' element={<Cabs />}></Route>
            <Route path='/deleteCab/:id' element={<DeleteCab />}></Route>
            <Route path='/addCab' element={<AddCab />}></Route>
            <Route path='/updateCab/:id' element={<UpdateCab />}></Route>
            <Route path='/cabType' element={<CabType />}></Route>
            <Route path='/showCab/:id' element={<Cab />}></Route>

            <Route path='/customers' element={<Customers />}></Route>  
            <Route path='/addcustomers' element={<AddCustomer />}></Route>
            <Route path='/updateCustomer/:id' element={ <UpdateCustomer />}></Route>
            <Route path='/customer/:id' element={<Customer />}></Route>
            <Route path='/deleteCustomer/:id' element={<DeleteCustomer />}></Route>
            <Route path='/customer' element={<CustomerHome />}></Route>

            <Route path='/add' element={<AddDriver />}></Route>
            <Route path='/update/:id' element={ <UpdateDriver />}></Route>
            <Route path='/driver/:id' element={<Driver />}></Route>
            <Route path='/drivers' element={<Drivers />}></Route>
            <Route path='/deleteDriver/:id' element={<DeleteDriver />}></Route>
            <Route path='/drivertable' element={<DriverTable />}></Route>
            <Route path='/driver' element={<DriverHome />}></Route>

            <Route path='/trips' element={<DriverHome />}></Route>
            <Route path='/delete/:id' element={<DeleteTrips/>}></Route>
            <Route path='/update/:cabId/:customerId/:tripBookingId' element={<UpdateTripBooking/>}></Route>
            <Route path='/trip/:id' element={<Trip/>}></Route>
            <Route path='/customerCabs' element={<CabDetailsForCustomer/>}></Route>
            <Route path='/tripbooking' element={<TripBookingHome />}></Route>
            <Route path='/viewtrips' element={<Trips />}></Route>
            <Route path='/addAdmin' element={<AddAdmin />}></Route>
            <Route path='/showAdmin' element={<Admins />}></Route>
            <Route path='/updateAdmin/:id' element={ <UpdateAdmin />}></Route>
            <Route path='/deleteAdmin/:id' element={ <DeleteAdmin />}></Route>
         </Routes>
         </BrowserRouter>
         <Footer />
   </div>

  );
}

export default App;
