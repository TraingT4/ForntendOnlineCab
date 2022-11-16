import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9090/api/tripbookings";

class TripBookingService {

    getTrips(){
        return axios.get(apiPath+'/');
    }

    getTrip(id){
        return axios.get(apiPath+'/findone/'+id);
    }

    getAllTripsCustomrWise(id){
        return axios.get(apiPath+'/all/'+id);
    }

    saveTrips(trips,cabId,customerId){
        return axios.post(apiPath+"/"+cabId+"/"+customerId, trips);
    }

    updateTripBooking(cabId, customerId,trip){
        return axios.put(apiPath+"/"+cabId+"/"+customerId, trip)
    }

    deleteTrips(id){
        return axios.delete(apiPath+"/"+id);
    }
}
export default new TripBookingService;