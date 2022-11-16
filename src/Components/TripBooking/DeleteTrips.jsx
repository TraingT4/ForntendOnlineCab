import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import TripBookingService from "../../Services/TripBookingService"
import Menu1 from "../Home/Menu1";



const DeleteTrips = () => {
    const {id} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        TripBookingService.deleteTrips(id).then(response => {
            if(response.status === 204){
            
                setMessage("TripBooking is cancled  Successfully. with  Id::"+id);
            }
        }).catch(e => console.log("Exception while cancle Booking with Id:: "+id))
    },[]);

    return (
        <div>
            <div className='conatiner'> 
                <Menu1 />
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/showtrips">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteTrips;