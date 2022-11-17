import photo from '../../images/pp.jpg'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TripBookingService from '../../Services/TripBookingService';
import Menu1 from "../Home/Menu1";
const Trip = () => {
    const {id} = useParams();
    const [trip, setTrip] = useState({});
    let [message, setMessage] = useState("");

    useEffect(() => {
        TripBookingService.getTrip(id).then(response => {
            setTrip(response.data);
        }).catch(error=>{
            setMessage(error.response.data);
         })
    });

    return (
     <div>
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>TripBooking Id: {trip.tripBookingId}</h4>
            </div>
            <div className="card-body">
                <img src={photo} alt="photo" className="card-img-top rounded-circle employee-photo" />
                <div className="card-title">
                <h4>{message}</h4>
                    <h4>Journey Details</h4>
                </div>
                <div className="card-text">
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <th> Customer ID:</th>
                                    </tr>
                                    <tr>
                                        <th> Cab Id:</th>
                                    </tr>
                                    <tr>
                                        <th>From:</th>
                                    </tr>
                                    <tr>
                                        <th>To:</th>
                                    </tr>
                                    <tr>
                                        <th>Date:</th>
                                    </tr>
                                    
                                </table>
                            </td>
                            <td>
                            <table>
                                    <tr>
                                        <td>{trip.customer}</td>
                                    </tr>
                                    <tr>
                                        <td>{trip.cab}</td>
                                    </tr>
                                    <tr>
                                        <td>{trip.fromLocation}</td>
                                    </tr>
                                    <tr>
                                        <td>{trip.toLocation}</td>
                                    </tr>
                                    <tr>
                                        <td>{trip.fromDateTime}</td>
                                    </tr>
                                    <tr>
                                        <td>{trip.status}</td>
                                    </tr>
                                   
                                </table>
                            </td>
                        </tr>
                   </table>
                </div>
            </div>
            <div className="card-footer p-2">
                  <a className='btn btn-danger' href="/showtrips">Go Back</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Trip;