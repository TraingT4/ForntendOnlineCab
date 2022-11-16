import { useContext, useState } from "react";

const TripsTable = (props) => {
    const trips= props.trips;
    const searchStr = props.searchStr;
    return (
        <table className="table table-striped table-hover bg-info rounded">
            <thead className="table-gray text-danger">
                <tr>
                    <th>Id</th>
                    <th>Cab Id</th>
                    <th>Customr Id</th>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Journey Date</th>
                    <th>Finishing Date</th>
                  
                    <th>Distane</th>
                    <th>Bill</th>
                   
                    
                </tr>
            </thead>
            <tbody className="table-light">
                {
                    trips.filter(trp => (trp.fromLocation.toLowerCase().includes(searchStr.toLowerCase()) )||
                    (trp.toLocation.toLowerCase().includes(searchStr.toLowerCase()) )
                    
                    ).map(trp => (
                        <tr>
                            <td>{trp.tripBookingId}</td>
                            <td>{trp.cab}</td>
                            <td>{trp.customer}</td>
                            <td>{trp.fromLocation}</td>
                            <td>{trp.toLocation}</td>
                            <td>{trp.fromDateTime}</td>
                            <td>{trp.toDateTime}</td>
                            <td>{trp.distanceInKm}</td>
                            <td>{trp.bill}</td>
                            <td>{trp.status}</td>
                            
                            <td>
                                <a className="btn btn-primary m-1" href={"/update/"+trp.cab+"/"+trp.customer+"/"+trp.tripBookingId} >Update</a>
                                <a className="btn btn-danger m-1" href={"/delete/"+trp.tripBookingId}>Delete</a>
                                <a className="btn btn-success m-1" href={"/trip/"+ trp.tripBookingId}>Show</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default TripsTable;