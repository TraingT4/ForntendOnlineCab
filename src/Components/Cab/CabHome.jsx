import React from 'react';
import CabMenu from './CabMenu';

class CabHome extends React.Component {

    render(){
        return  <div className='container'>
                    
                    <div className='container-fluid pt-5 '>
                        <div className='conatiner'> 
                        <CabMenu name="CabHome"/> 
                        </div>
                    </div>
                    <div className='container-fluid w-auto pt-1 broder rounded  p-5 m-5'>
                        <h3 className='heading'>Cab Management </h3> 
                        <h4>It maintains all the cab Information.It can also modify data of cab </h4>
                        <ul className='heading'>
                            <li>Add Cab</li>
                            <li>Delete Cab</li>
                            <li>Show Cab</li>
                            <li>Update Cab</li>
                        </ul>
                    </div>
                </div>
                
    }


}

export default CabHome;
