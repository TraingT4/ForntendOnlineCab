import React from 'react';
import CustomerMenu from './CustomerMenu';

class CustomerHome extends React.Component {

    render(){
        return  <div className='container'>
                    
                    <div className='container w-50 pt-5 '>
                        <div className='conatiner'> 
                        <CustomerMenu name="CustomerHome"/> 
                        </div>
                    </div>
                    <div className='container-fluid w-auto pt-1 broder rounded  p-5 m-5'>
                        <h3 className='heading'>Customer Management </h3> 
                        <h4>It maintains all the customer Information.It can also modify data of customer </h4>
                        <ul className='heading'>
                           
                            <li>Delete Customer</li>
                            <li>Show Customer</li>
                            <li>Update Customer</li>
                        </ul>
                    </div>
                </div>
                
    }
    
}

export default CustomerHome;