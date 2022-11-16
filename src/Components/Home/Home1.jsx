import React, { useEffect } from 'react';

import Menu1 from './Menu1';
import { Navigate, useNavigate } from 'react-router-dom';


const Home1 = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home1');
    },[]);

    return  (<div className='container '>
    <div className='conatiner'> 
    
    <div className='conatiner'> 
      <Menu name="Home"/>
      </div>
  </div>
</div>

)


}

export default Home1;
