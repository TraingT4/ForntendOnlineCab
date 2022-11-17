import React from 'react';
import TripBookingMenu from './TripBookingMenu';

class TripBookingHome extends React.Component {

    render(){
        return  <div className='container'>
                    
                    <div className='container w-50 pt-5 '>
                        <div className='conatiner'> 
                        <TripBookingMenu name="TripBookingHome"/> 
                        <div className='container-fluid pt-5 broder rounded  p-5 m-5'>
                        <h3 className='heading'>Trip Booking Module </h3> 
                        <h4>It contains all the trips Information.It can also modify data of trips by</h4>
                        <ul className='heading'>
                            <li>Cancel the trip </li>
                            <li>Update the trip</li>
                            <li>Show the trips</li>
                            <li>Show the cabs</li>
                        </ul>
                    </div>
                        </div>
                    </div>
                </div>
                
    }
    
}

export default TripBookingHome;