import React from 'react';
import CustomerMenu from './CustomerMenu';

class CabHome extends React.Component {

    render(){
        return  <div className='container'>
                    
                    <div className='container w-50 pt-5 '>
                        <h2 className='p-auto customerHeading' >Customer Management</h2>
                        <br />
                        <div className='conatiner'> 
                        <CustomerMenu name="CustomerHome"/> 
                        </div>
                    </div>
                </div>
                
    }
    
}

export default CabHome;