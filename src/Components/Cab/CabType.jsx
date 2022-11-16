import { useState } from 'react';
import {useForm} from 'react-hook-form';
import CabService from '../../Services/CabService';
import CabMenu from './CabMenu';
const CabType = () => {
    let { register, handleSubmit, formState: {errors}} = useForm();
    let [count,setCount]=useState("");
    const showCab = (cab) => {
        CabService.getCabCount(cab.carType).then(response=>{
            if(response.status===200)
            {
                setCount(response.data);
            }
        }
        ).catch(error=>{
             setCount(error.response.data);
          })
    }
    return(
        <div className='conatiner'> 
            <CabMenu name="Home"/>
            <div className="container w-25 bg-info form rounded p-5">
                <h4> Cab Type</h4>  
                <form onSubmit={handleSubmit(showCab)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">CarType: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                { ...register("carType", {required: true} ) }
                            />
                            {errors.driverId && errors.driverId.type === "required" && <span className='error'>Driver Id is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Count: </label>  
                            {count===""?null:<span>{count}</span>}  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-primary m-3">Show</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CabType;