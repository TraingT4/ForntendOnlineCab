import { useState } from 'react';
import {useForm} from 'react-hook-form';
import CabService from '../../Services/CabService';
import CabMenu from './CabMenu';
const AddCab = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();

    const saveCab = (cab) => {
        const cabInfo={carType:cab.carType,perKmRate:cab.perKmRate,tripBooking:null};
        CabService.saveCab(cab.driverId,cabInfo).then(response => {
            if(response.status === 201){
                setMessage("Cab Added Successfully. Cab ID : "+response.data.cabId);
            }
        }).catch(error=>{
            setMessage(error.response.data);
         })
    }

    return(
        <div className='conatiner'> 
            <CabMenu name="CabHome"/>
            <div className="container w-25 bg-info form rounded p-5">
                <h4>Add Cab</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(saveCab)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">DriverId: </label>
                            <input 
                                className="form-control" 
                                type="number"
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
                                { ...register("perKmRate", {required: true ,min:0}) }    
                            />
                           {errors.perKmRate && errors.perKmRate.type === "required" && <span className='error'>Charge per KM is required</span>}
                            {errors.perKmRate && errors.perKmRate.type === "min" && <span className='error'>Charge must be positive</span>}
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

export default AddCab;

