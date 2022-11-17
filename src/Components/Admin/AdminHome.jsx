import React from 'react';
import AdminMenu from './AdminMenu';
import Menu from '../Home/Menu';

class AdminHome extends React.Component {

    render(){
        return  <div className='container img'>
                    
                    <div className='container  pt-2 '>

                        <div className='conatiner'> 
                        <Menu name="AdminHome"/>

                        </div>
                    </div>
                    <div className='container-fluid w-auto pt-5 broder rounded  p-5 m-5'>
                        <h3 className='heading'>Admin Management System</h3> 
                        <h4>It maintains all the admin Information.It can also modify data of </h4>
                        <ul className='heading'>
                            <li>Customer</li>
                            <li>Driver</li>
                            <li>Cab</li>
                            <li>TripBooking</li>
                        </ul>
                    </div>
                </div>
                
    }


}

export default AdminHome;
