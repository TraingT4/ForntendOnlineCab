import CabMenu from "./CabMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CabService from "../../Services/CabService";
import { useForm } from "react-hook-form";

const UpdateCab = () => {
    const { id } = useParams();   
    const [message , setMessage] = useState(""); 
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [cab, setCab]=useState({});

    const updateCab = (cab) => {
        const cabInfo={driver:{driverId:cab.driverId},cabId:id,carType:cab.carType,perKmRate:cab.perKmRate,tripBooking:null};
        CabService.updateCab(cabInfo).then(response => {
            if(response.status === 200){
                setMessage("Cab details updated Successfully");
            }
        }).catch(error=>{
            setMessage(error.response.data);
         })
    }
    useEffect(() => {
        CabService.getCabById(id).then(response => {
            setCab(response.data);
            document.getElementById('driverId').value=response.data.driver;
            document.getElementById('carType').value=response.data.carType;
            document.getElementById('perKmRate').value=response.data.perKmRate;
            
        }).catch(e => console.log("Exception while fetching customer info "+e));
    },[]);

    return(
        <div className='conatiner'> 
            <CabMenu name="CabHome"/>
            <div className="container w-25 bg-info form rounded p-5">
                <h4>Update Cab</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateCab)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">DriverId: </label>
                            <input 
                                className="form-control" 
                                type="number"
                                id="driverId"
                                { ...register("driverId", {required: true} ) }
                            />
                            {errors.driverId && errors.driverId.type === "required" && <span className='error'>Driver Id is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">CarType: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="carType"
                                defaultValue=""
                                { ...register("carType", {required: true}) }
                            />
                            {errors.carType && errors.carType.type === "required" && <span className='error'>Cab Type is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Charge per Km: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="perKmRate"
                                { ...register("perKmRate", {required: true }) }    
                            />
                            {errors.phoneNumber && errors.phoneNumber.type === "required" && <span className='error'>Phone Number is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-primary m-3">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default UpdateCab;