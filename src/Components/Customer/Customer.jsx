import photo from '../../images/profile_pic.jpg'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomerService from '../../Services/CustomerService';
import CustomerMenu from './CustomerMenu';
const Customer = () => {
    const {id} = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        CustomerService.getCustomer(id).then(response => {
            setCustomer(response.data);
        }).catch(e => console.log("Exception while fetching customer info "+e));
    },[]);

    return (
    <div >
        <CustomerMenu name="CustomerHome" />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>{customer.Username}</h4>
            </div>
            <div className="card-body">
                <img src={photo} alt="photo" className="card-img-top rounded-circle customer-photo" />
                <div className="card-title">
                    <h4>Details</h4>
                </div>
                <div className="card-text">
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <th>ID:</th>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                    </tr>
                                    <tr>
                                        <th>Username:</th>
                                    </tr>
                                    <tr>
                                        <th>Address:</th>
                                    </tr>
                                    <tr>
                                        <th>Phone:</th>
                                    </tr>
                                    
                                    
                                </table>
                            </td>
                            <td>
                            <table>
                                    <tr>
                                        <td>{customer.customerId}</td>
                                    </tr>
                                    <tr>
                                        <td>{customer.email}</td>
                                    </tr>
                                    <tr>
                                        <td>{customer.username}</td>
                                    </tr>
                                    <tr>
                                        <td>{customer.address}</td>
                                    </tr>
                                    <tr>
                                        <td>{customer.mobileNumber}</td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                   </table>
                </div>
            </div>
            <div className="card-footer p-2">
                  <a className='btn btn-danger' href="/customers">Go Back</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Customer;