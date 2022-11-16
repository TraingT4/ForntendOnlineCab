import React from 'react'

const DriverTable = (props) => {
    const drivers = props.drivers;
    const searchValue = props.searchStr;

    // const change = (value) => {
    //     DriverService.deleteDriver(value);
    // }
    return (
       
        <div >
            
            <div >
              
                <table className="table table-striped table-bordered w-20 table-hover bg-dark">
                    <thead className="table-gray text-center" style={{color:'orange'}}>
                        <tr>
                            <th>Username</th>
                            {/* <th>Password</th> */}
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>LicenceNo</th>
                            <th>Address</th>
                            <th>DriverId</th>
                            <th>Rating</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            drivers.filter(driver=>driver.username==searchValue ||
                             searchValue=="" || searchValue==null || driver.email==searchValue || driver.mobileNumber==searchValue ||
                             driver.licenceNO==searchValue || driver.address==searchValue || 
                             driver.rating==searchValue  ).map(driver => (
                
                                <tr>
                                        <td>{driver.username}</td>
                                        {/* <td>{driver.password}</td> */}
                                        <td>{driver.email}</td>
                                        <td>{driver.mobileNumber}</td>
                                        <td>{driver.licenceNO}</td>
                                        <td>{driver.address}</td>
                                        <td>{driver.driverId}</td>
                                        <td>{driver.rating}</td> 
                        
                                    <td>
                                        <a className="btn btn-primary m-1" href={"/update/"+driver.driverId}>Update</a>
                                        <a className="btn btn-danger m-1" href={"/deleteDriver/"+driver.driverId}>Delete</a>
                                        <a className="btn btn-success m-1" href={"/driver/"+driver.driverId}>Show</a>
                                        {/* <a className="btn btn-danger m-1" onClick={change(driver.driverId)}>Delete</a> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    </div>
      )
    }
    
export default DriverTable
