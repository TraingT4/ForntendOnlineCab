import React from 'react';
import TripBookingMenu from './TripBookingMenu';

class TripBookingHome extends React.Component {

    render(){
        return  <div className='container'>
                    
                    <div className='container w-50 pt-5 '>
                        <h2 className='p-auto customerHeading' >Trip Management</h2>
                        <br />
                        <div className='conatiner'> 
                        <TripBookingMenu name="TripBookingHome"/> 
                        </div>
                    </div>
                </div>
                
    }
    
}

export default TripBookingHome;