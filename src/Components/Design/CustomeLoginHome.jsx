import React, { useEffect } from 'react';
import Menu from '../Home/Menu';

import CustomerLoginMenu from './CustomerLoginMenu';
import { Navigate, useNavigate } from 'react-router-dom';


const CustomerLoginHome = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home1');
    },[]);

    return  (
        <div className='container-fluid '>
                    
                    <div className='container  pt-1 d-flex flex-row'>
                        <h2 className='p-auto heading' ></h2>
                        <br />
                        <div className='conatiner'> 
                        <Menu name="CustomerLoginHome"/>
                        <div className='container-fluid pt-5 broder rounded  p-5 m-5'>
                        <h3 className='heading'>Customer Login </h3> 
                        <h4>It contains all the customer trips Information.It can also modify data of trips by</h4>
                        <ul className='heading'>
                            <li>Booking the trips</li>
                            <li>Cancel the trip </li>
                            <li>Update the trip</li>
                            <li>Show the trips</li>
                            <li>Show the cabs</li>
                        </ul>
                    </div>
                        </div>
                    </div>
                </div>
                
    )


}

export default CustomerLoginHome;
