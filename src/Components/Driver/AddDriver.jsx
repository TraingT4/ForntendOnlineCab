import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import DriverService from '../../Services/DriverService';

const AddDriver = () => {

    let { register,reset,handleSubmit, formState: {errors}} = useForm();
    let [message, setMessage] = useState("");

    const saveDriver = (driver) => {
        DriverService.saveDriver(driver).then(response => {
            if(response.status === 201){
                setMessage("Driver Added Successfully. driver ID :"+response.data.driverId);
                reset();
            }
        })
    }
  return (

    <div >        
        <form onSubmit={handleSubmit(saveDriver)}>
            <div className='container w-50 pt-5 mb-2 bg-dark text-white form'>
                <br></br>
                <br></br>
               <marquee direction="right" scrollamount="4"><h2 style={{color:'orange'}}>Add Driver</h2></marquee>
                DriverId : <input type="number"class="form-control" {...register("driverId")}/>
                <div className='mb-1'>
                {/* {errors.driverId && errors.driverId.type === "required" && <span className='error'>DriverId is required</span>} */}
                </div>
                Username : <input type="text" class="form-control" {...register("username",{required: true})}/>
                <div className='mb-1'>
                  {errors.username && errors.username.type === "required" && <span className='error'>userName is required</span>}
                </div>
                Password : <input type="text"class="form-control" {...register("password",{required: true})}/>
                <div className='mb-1'>
                {errors.password && errors.password.type === "required" && <span className='error'>Password is required</span>}
                </div>
                Address : <input type="text"class="form-control" {...register("address",{required: true})}/>
                <div className='mb-1'>
                {errors.address && errors.address.type === "required" && <span className='error'>Address is required</span>}
                </div>
                MobileNumber : <input type="number" class="form-control" {...register("mobileNumber",{required: true, minLength:10, maxLength:10,min:0})}/>
                <div className='mb-1'>
                {errors.mobileNumber && errors.mobileNumber.type === "required" && <span className='error'>Mobile Number is required</span>}
                {errors.mobileNumber && errors.mobileNumber.type === "minLength" && <span className='error'>Mobile Number must contain 10 digits</span>}
                {errors.mobileNumber && errors.mobileNumber.type === "maxLength" && <span className='error'>Mobile Number must contain maximum 10 digits</span>}
                {errors.mobileNumber && errors.mobileNumber.type === "min" && <span className='error'>Mobile Number should be positive</span>}
                </div>
                Email : <input type="text"class="form-control" {...register("email",{required: true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}/>
                <div className='mb-1'>
                {errors.email && errors.email.type === "required" && <span className='error'>Email is required</span>}
                {errors.email && errors.email.type === "pattern" && <span className='error'>Invalid email</span>}
                </div>
                LicenceNO : <input type="text"class="form-control" {...register("licenceNO",{required: true})}/>
                <div className='mb-1'>
                {errors.licenceNO && errors.licenceNO.type === "required" && <span className='error'>LicenceNO is required</span>}
                </div>
                {/* <div className='mb-1'> */}
                Rating : <input type="number"class="form-control" {...register("rating",{required: true,max:5,min:0})}/>
                {/* </div> */}
                <div className='mb-1'>
                {errors.rating && errors.rating.type === "required" && <span className='error'>Rating is required</span>}
                {errors.rating && errors.rating.type === "max" && <span className='error'>Rating should be less than 5</span>}
                {errors.rating && errors.rating.type === "min" && <span className='error'>Rating should be greater than 0</span>}
                </div>
                {/* Rating :
                <select className="form-select mb-3" aria-label="Default select example">
                    <option selected>Driver Rating</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                </select> */}
                
                <marquee direction="right"><span className='mb-5' style={{color:'orange'}}><b>{message}</b></span></marquee>
                
            </div>
            <div className="text-center">
                    <button type="submit" className="btn btn-danger">Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddDriver
