import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import DriverService from '../../Services/DriverService';
import { useParams } from 'react-router-dom';
import photo from '../../images/profile-picture.jpg'

const Driver = () => {

  const {id} = useParams();

  const [driver, setDriver] = useState({});

    useEffect(() => {
      DriverService.getDriver(id).then(response => {
        setDriver(response.data);
    }).catch(e => console.log("Exception while fetching driver info "+e));
  },[]);
  return (
  
    <div>
  <div className="container w-25 pt-5">

    <div className="card">
        <div className="card-header">
            <h4>{driver.username}</h4>
        </div>
        <div className="card-body">
            <img src={photo} alt="photo" className="card-img-top rounded-circle driver-photo" />
            <div className="card-title">
                <h4>Details</h4>
            </div>
            <div className="card-text">
                <table>
                    <tr>
                        <td>
                            <table>
                            <tr>
                                <th>Username</th>
                              </tr>
                              {/* <tr>
                                <th>Password</th>
                              </tr> */}
                              <tr>
                                <th>Email</th>
                              </tr>
                              <tr>
                                <th>Mobile Number</th>
                              </tr>
                              <tr>
                                <th>LicenceNo</th>
                              </tr>
                              <tr>
                                <th>Address</th>
                              </tr>
                              <tr>
                                <th>DriverId</th>
                              </tr>
                              <tr>
                                <th>Rating</th> 
                              </tr>
                            </table>
                        </td>
                        <td>
                          <table>
                            <tr>
                            <td>{driver.username}</td>
                            </tr>
                             {/* <tr>
                             <td>{driver.password}</td>
                            </tr> */}
                             <tr>
                             <td>{driver.email}</td>
                            </tr>
                             <tr>
                             <td>{driver.mobileNumber}</td>
                            </tr>
                             <tr>
                             <td>{driver.licenceNO}</td>
                            </tr>
                             <tr>
                             <td>{driver.address}</td>
                            </tr>
                             <tr>
                             <td>{driver.driverId}</td>
                            </tr>
                             <tr>
                             <td>{driver.rating}</td>
                            </tr>                       
                          </table>
                        </td>
                    </tr>
               </table>
            </div>
        </div>
        <div className="card-footer p-2">
              <a className='btn btn-danger' href="/drivers">Go Back</a>
        </div>
    </div>
  </div>
</div>
  )
}
export default Driver;
