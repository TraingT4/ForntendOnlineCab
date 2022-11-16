import React from 'react';
import DriverMenu from './DriverMenu';

class DriverHome extends React.Component {

    render(){
        return  <div className='container'>
                    
                    <div className='container w-50 pt-5 '>
                        <h2 className='p-auto customerHeading' >Driver Management</h2>
                        <br />
                        <div className='conatiner'> 
                        <DriverMenu name="DriverHome"/> 
                        </div>
                    </div>
                </div>
                
    }
    
}

export default DriverHome;