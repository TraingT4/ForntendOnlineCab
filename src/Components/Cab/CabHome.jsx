import React from 'react';
import CabMenu from './CabMenu';

class CabHome extends React.Component {

    render(){
        return  <div className='container'>
                    
                    <div className='container w-50 pt-5 '>
                        <h2 className='p-auto heading' >Cab Management</h2>
                        <br />
                        <div className='conatiner'> 
                        <CabMenu name="CabHome"/> 
                        </div>
                    </div>
                </div>
                
    }


}

export default CabHome;
