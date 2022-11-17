import React from 'react';
import DriverMenu from './DriverMenu';

const DriverHome =(props)=> {
    
    
        return  <div className='container'>
                    
                    <div className='container w-50 pt-5 '>
                        <div className='conatiner'> 
                        <DriverMenu name="DriverHome"/> 
                        </div>
                    </div>
                    <div className='container-fluid w-auto pt-1 broder rounded  p-5 m-5'>
                        <h3 className='heading'>Driver Management </h3> 
                        <h4>It maintains all the driver Information.It can also modify data of driver </h4>
                        <ul className='heading'>
                            <li>Add Driver</li>
                            <li>Delete Driver</li>
                            <li>Show Driver</li>
                            <li>Update Driver</li>
                        </ul>
                    </div>
                </div>
                
    }
    


export default DriverHome;