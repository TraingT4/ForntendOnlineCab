import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import TripBookingService from '../../Services/TripBookingService';
import { useNavigate } from 'react-router-dom';

const AddTrips = () => {
   
    let { register, handleSubmit, formState: {errors}} = useForm();
    let [message, setMessage] = useState("");
    let navigate = useNavigate();

    const saveTrips = (trips) => {
        const ifno=
            {
                
                customer: null,
                cab: null,
                fromLocation: trips.fromLocation,
                toLocation: trips.toLocation,
                fromDateTime: trips.fromDateTime,
                toDateTime: trips.toDateTime,
                status: trips.isActive,
                distanceInKm: trips.distanceInKm,
                bill: 0
              }
        
            //  alert(JSON.stringify(ifno))
        TripBookingService.saveTrips(ifno,trips.cabId,trips.customerId).then(response => {
            
            if(response.status === 201){
                alert("Booking Confirmed : Your Booking id is :"+ response.data.tripBookingId);
                navigate('/home1');
            }
        }).catch(error=>{
            setMessage(error.response.data);
         })
    }
  return (

    <div style={{backgroundColor:'orange'}}>
        
        <form onSubmit={handleSubmit(saveTrips)}>
            <div className='container w-50 pt-5 mb-2 bg-dark text-white form'>
                <br></br>
               <marquee direction="right"><h2 style={{color:'white'}}>Book Trips</h2></marquee> 
               <marquee direction="right"><span className='success'>{message}</span><br></br></marquee>
               <div>
                    CustomerId: <input type="Number" class="form-control" {...register("customerId", {required:true})}/>
                    {errors.customerId && errors.customerId.type === "required" && <span className='error'>customerId  is required</span>}
                </div>
                <div>
                Cab: <input type="Number" class="form-control" {...register("cabId", {required:true})}/>
                {errors.cabId && errors.cabId.type === "required" && <span className='error'>cabId  is required</span>}

                </div>
        
                
                <div>
                FromLocation : <input type="text" class="form-control" {...register("fromLocation", {required:true})}/>
                {errors.fromLocation && errors.fromLocation.type === "required" && <span className='error'>fromLocation  is required</span>}

                </div>
                
                <div>
                ToLocation : <input type="text" class="form-control" {...register("toLocation", {required:true})}/>
                {errors.toLocation && errors.toLocation.type === "required" && <span className='error'>toLocation  is required</span>}

                </div>
                
                <div>
                FromDate:<input type="datetime-local" class="form-control" {...register("fromDateTime", {required:true})}/>
                {errors.fromDateTime && errors.fromDateTime.type === "required" && <span className='error'>fromDateTime  is required</span>}

                </div>
                
                <div>
                ToDate:<input type="datetime-local" class="form-control" 
                {...register("toDateTime", {required:true})}
                
                />
                {errors.toDateTime && errors.toDateTime.type === "required" && <span className='error'>toDateTime  is required</span>}

                </div>

                
                <div>
                DistanceInKm: <input type="Number" class="form-control" {...register("distanceInKm", {required:true})}/>
                {errors.distanceInKm && errors.distanceInKm.type === "required" && <span className='error'>Distance  is required</span>}

                </div>
                <div>
                Status:<input 
                                type="checkbox" 
                                className='form-check form-check-input'
                                { ...register("isActive" ) }
                            />
                </div>
               
                
               
                
            </div>
            <div className="text-center">
        
                    <button type="submit" className="btn btn-danger">Book</button>
            </div>
            
        </form>
    </div>
  )
}

export default AddTrips


 