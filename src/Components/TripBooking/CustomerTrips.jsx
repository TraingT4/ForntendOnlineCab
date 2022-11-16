import { useEffect, useState } from "react";
import TripTable from  "./TripTable"
import TripGrid from "./TripGrid"
import Menu1 from "../Home/Menu1";
import TripBookingService from "../../Services/TripBookingService"
const CustomerTrips = (props) => {
    const id=props.id;
    const [trips, setTrips] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const customerUrl = "/customer/";
    const [searchStr, setSearchStr] = useState("");
    
    const [gridLayout, setGridLayout] = useState(true);
    useEffect(() => {
    const id=localStorage.getItem("customerId");
   
    
        TripBookingService.getAllTripsCustomrWise(id).then(response => {
            //console.log(response);
            setTrips(response.data);
        }).catch( error => [
            console.log("Error while fetching Trips information info "+error)
        ])
    },[]);

    const search = (e) =>{
        const searchText = e.target.value;
        setSearchStr(searchText);
        if(searchText.toLowerCase() === 'active'){
            setSearchStr("true");
        }
        if(searchText.toLowerCase() === 'in-active'){
            setSearchStr("false");
        }        
    }
    return (
        <div className="container">
                       
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} />       
                    <button type="text" className="btn btn-primary m-1 mb-2" onClick={() => setGridLayout(true)}>Grid</button>
                    <button type="text" className="btn btn-primary m-1 mb-2" onClick={() => setGridLayout(false)}>Table</button>
                </div>
                { gridLayout === true && <TripGrid trips={trips} searchStr={searchStr}/> }
                { gridLayout === false && <TripTable trips={trips} searchStr={searchStr}/> }
            </div>
        </div>
    );
}

export default CustomerTrips;