import React from 'react';
import AdminMenu from './AdminMenu';
import Menu from '../Home/Menu';

class AdminHome extends React.Component {

    render(){
        return  <div className='container  banner img'>
                    
                    <div className='container  pt-5 '>
                        <h2 className='p-auto heading' >Admin Management</h2>
                        <br />
                        <div className='conatiner'> 
                        <Menu name="AdminHome"/>
                        </div>
                    </div>
                </div>
                
    }


}

export default AdminHome;
