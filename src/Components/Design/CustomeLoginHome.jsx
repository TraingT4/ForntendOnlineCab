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
        <div className='container  banner img'>
                    
                    <div className='container  pt-5 '>
                        <h2 className='p-auto heading' ></h2>
                        <br />
                        <div className='conatiner'> 
                        <Menu name="AdminHome"/>
                        </div>
                    </div>
                </div>
                
    )


}

export default CustomerLoginHome;
