import Menu1 from "../Home/Menu1";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import TripBookingService from "../../Services/TripBookingService";

const UpdateTripBooking= () => {
    const { cabId } = useParams(); 
    const { customerId } = useParams();
    const { tripBookingId } = useParams();

     
    const [message, setMessage]=useState()
    const [fromLocation, setFromLocaton]=useState()
    const [trip, setTrip] = useState( {});
      
    const {register, handleSubmit, formState: {errors}} = useForm();

    const updateTrip= (trips) => {
        let info=
        {
            tripBookingId: trips.tripBookingId,
           
            fromLocation: trips.fromLocation,
            toLocation: trips.toLocation ,
            fromDateTime: trips.fromDateTime ,
            toDateTime:  trips.toDateTime,
            status: true,
            distanceInKm: trips.distanceInKm ,
            bill: trips.bill
          };
              
        TripBookingService.updateTripBooking(cabId, customerId, info).then(response => {
            if(response.status === 200){
                setMessage("Booking Updated Successfully");
            }
        }).catch(error=>{ setMessage(error.response.data)})
}
useEffect(() => {
    
    
    TripBookingService.getTrip(tripBookingId).then(response => {
        setTrip(response.data);
        document.getElementById('tripBookingId').value = response.data.tripBookingId;
        document.getElementById('customer').value = response.data.customer;
        alert(document.getElementById('customer').value )
        document.getElementById('cab').value = response.data.cab;
        document.getElementById('fromLocation').value = response.data.fromLocation;
        document.getElementById('toLocation').value = response.data.toLocation;
        document.getElementById('fromDateTime').value = response.data.fromDateTime;
        document.getElementById('toDateTime').value = response.data.toDateTime;
        document.getElementById('status').checked = response.data.status;
        document.getElementById('distanceInKm').value = response.data.distanceInKm;
        document.getElementById('bill').value = response.data.bill;
      
    }).catch(error=>{ setMessage(error.response.data)})
},[]);



    return (
        <div>
            <Menu1 />
            <div className="container w-25 bg-info form rounded p-5">
                <h4>Update TripBooking</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateTrip)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">TripBooking ID: </label>
                            <input 
                                className="form-control" 
                                type="number"
                                defaultValue=""
                                id="tripBookingId"
                                readOnly
                              // onChange={(e) => settripBookingId(e.target.value)}
                                { ...register("tripBookingId", {required: true} ) }
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Customer Id: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                 defaultValue=""
                                id="customer"
                                readOnly
                               // onChange={(e) => setCustomerId(e.target.value)}
                                { ...register("customer", {required: true}) }
                            />
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Cab Id: </label>
                            <input 
                                className="form-control" 
                                defaultValue=""
                                type="number" 
                                id="cab"
                                readOnly
                                  // onChange={(e) => setCabId(e.target.value)}
                                { ...register("cab", {required: true}) }
                            />
                          
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">From Location </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="fromLocation"

                              //  onChange={(e) => setFromLocaton(e.target.value)}
                                { ...register("fromLocation", {required: true}) }    
                            />
                           
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">To Location </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="toLocation"
                                //value={trip.toLocation}
                                { ...register("toLocation", {required: true}) }    
                            />
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">From Date Time </label>
                            <input 
                                className="form-control" 
                                type="datetime-local" 
                                id="fromDateTime"
                                { ...register("fromDateTime", {required: true }) }    
                            />
                           
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="">To Date Time </label>
                            <input 
                                className="form-control" 
                                type="datetime-local" 
                                id="toDateTime"
                                { ...register("toDateTime", {required: true }) }    
                            />
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Active: </label>
                            <input 
                                type="checkbox" 
                                id="status"
                                className="form-check form-check-input"
                                { ...register("status") }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Distance:</label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="distanceInKm"
                             //   onChange={(e) => setBill(e.target.value)}
                                { ...register("distanceInKm", {required: true }) }    
                            />
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Bill:</label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="bill"
                                readOnly
                                { ...register("bill", {required: true }) }    
                            />
                           
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-primary m-3">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default UpdateTripBooking;