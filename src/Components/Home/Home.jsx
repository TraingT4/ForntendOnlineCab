import React, { useEffect } from 'react';
import Logout from '../Login/Logout';
import Menu from './Home';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthGuard from '../Login/AuthGuard';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
    },[]);

    return  (<div className='container'>
                      <div className='conatiner'> 
                        <Menu name="Home"/>
                    </div>
                    <div className='container w-50 pt-5 broder rounded bg-warning p-5 m-5'>
                        <p><h5>Employee Management System</h5> maintains employees information. It can do the following operations</p>
                        <ul>
                            <li>Add Emoployee</li>
                            <li>Update Emoployee</li>
                            <li>Delete Emoployee</li>
                            <li>Show Emoployee</li>
                        </ul>
                    </div>
                </div>
                
    )


}

export default Home;
