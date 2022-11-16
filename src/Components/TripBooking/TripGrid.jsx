import { useState } from "react";
import photo from '../../images/pp.jpg';

const TripGrid = (props) => {
    const trips = props.trips;
    const searchStr = props.searchStr;
    return (
        <div className="row border rounded bg-warning pb-5">
            <a className=" btn btn-primary" href="/home1">Go back</a>
        {
            trips.filter(trp => (trp.fromLocation.toLowerCase().includes(searchStr.toLowerCase()) )||
                    (trp.toLocation.toLowerCase().includes(searchStr.toLowerCase()) )
                    
                    ).map(trp => (
                <div className="col col-lg-4 w-25 pt-5">
                    <div className="card">
                    <div className="card-header">
                    <h4>Trip Details with Id {trp.tripBookingId}</h4>
                    </div>
                    <div className="card-body">
                    <img src={photo} alt="photo" className="card-img-top rounded-circle border border-warning employee-photo" />
                    <div className="card-title">
                        <h4>For CustomerId: {trp.customer}</h4>
                    </div>
                    <div className="card-text">
                        <table>
                            <tr>
                                <td>
                                    <table>
                                        <tr>
                                            <th>Cab ID:</th>
                                        </tr>
                                        <tr>
                                            <th>FromLocation</th>
                                        </tr>
                                        <tr>
                                            <th>ToLocation</th>
                                        </tr>
                                        <tr>
                                            <th>Bill</th>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td>
                                <table>
                                        <tr>
                                            <td>{trp.tripBookingId}</td>
                                        </tr>
                                        <tr>
                                            <td>{trp.fromLocation}</td>
                                        </tr>
                                        <tr>
                                            <td>{trp.toLocation}</td>
                                        </tr>
                                        <tr>
                                            <td>{trp.bill}</td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                    </table>
                    </div>
                    </div>
                    <div className="card-footer p-2">
                        <a className="btn btn-primary m-1" >Update</a>
                        <a className="btn btn-danger m-1" >Delete</a>
                    </div>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
export default TripGrid;