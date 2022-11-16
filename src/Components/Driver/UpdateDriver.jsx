import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import DriverService from '../../Services/DriverService';
import { useParams } from 'react-router-dom';
import {useForm} from 'react-hook-form';


const Driver = () => {

  const {id} = useParams();

  const [driver, setDriver] = useState({licenceNO:"",username:"",password:"",mobileNumber:"",email:"",driverId:"",address:"",rating:""});
  const [licenceNo,setLicenceNo] = useState("");
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [mobileNumber,setmobileNumber] = useState("");
  const [email,setemail] = useState("");
  const [driverId,setdriverId] = useState("");
  const [address,setaddress] = useState("");
  const [rating,setrating] = useState("");
  const [message , setMessage] = useState("");
  const {register,reset, handleSubmit, formState: {errors}} = useForm();

  const updateDriver = (driver) => {
    DriverService.updateDriver(id, driver).then(response => {
        if(response.status === 200){
            setMessage("Driver Updated Successfully with driver ID:" +response.data.driverId);
            reset();
        }
    })
}
  useEffect(() => {
    DriverService.getDriver(id).then(response => {
    
      setDriver(response.data);
      document.getElementById('username').value = response.data.username;
      document.getElementById('password').value = response.data.password;
      document.getElementById('licenceNO').value = response.data.licenceNO;
      document.getElementById('mobileNumber').value = response.data.mobileNumber;
      document.getElementById('email').value = response.data.email;
      document.getElementById('driverId').value = response.data.driverId;
      document.getElementById('address').value = response.data.address;
      document.getElementById('rating').value = response.data.rating;
  }).catch( error => [
      console.log("Error while fetching driver info "+error)
  ])
},[]);
  return (
    
    <div >
        
        <form onSubmit={handleSubmit(updateDriver)}>
            <div className='container w-50 pt-5 mb-2 bg-dark text-white form'>
                <br></br>
                <br></br>
               <marquee direction="right"><h2 style={{color:'orange'}}>Update Driver</h2></marquee> 
                DriverId : <input type="number" id="driverId" class="form-control" readOnly  onChange={(e) => setdriverId(e.target.value)}  {...register("driverId",{required: true})}/>
                <div className='mb-1'>
                {/* {errors.driverId && errors.driverId.type === "required" && <span className='error'>DriverId is required</span>} */}
                </div>
                Username : <input type="text" id="username" class="form-control"  onChange={(e) => setusername(e.target.value)}{...register("username",{required: true})}/>
                <div className='mb-1'>
                  {errors.username && errors.username.type === "required" && <span className='error'>userName is required</span>}
                </div> 
                Password : <input type="text" id="password" class="form-control"  onChange={(e) => setpassword(e.target.value)}  {...register("password",{required: true})}/>
                <div className='mb-1'>
                {errors.password && errors.password.type === "required" && <span className='error'>Password is required</span>}
                </div>
                Address : <input type="text"id="address" class="form-control"  onChange={(e) => setaddress(e.target.value)}  {...register("address",{required: true})}/>
                <div className='mb-1'>
                {errors.address && errors.address.type === "required" && <span className='error'>Address is required</span>}
                </div>
                MobileNumber : <input type="number" id="mobileNumber"  class="form-control" onChange={(e) => setmobileNumber(e.target.value)} {...register("mobileNumber",{required: true, minLength:10, maxLength:10,min:0})}/>
                <div className='mb-1'>
                {errors.mobileNumber && errors.mobileNumber.type === "required" && <span className='error'>Mobile Number is required</span>}
                {errors.mobileNumber && errors.mobileNumber.type === "minLength" && <span className='error'>Mobile Number must contain 10 digits</span>}
                {errors.mobileNumber && errors.mobileNumber.type === "maxLength" && <span className='error'>Mobile Number must contain maximum 10 digits</span>}
                {errors.mobileNumber && errors.mobileNumber.type === "min" && <span className='error'>Mobile Number should be positive</span>}
                </div>
                Email : <input type="text" id="email" class="form-control" onChange={(e) => setemail(e.target.value)}  {...register("email",{required: true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}/>
                <div className='mb-1'>
                {errors.email && errors.email.type === "required" && <span className='error'>Email is required</span>}
                {errors.email && errors.email.type === "pattern" && <span className='error'>Invalid email</span>}
                </div>
                LicenceNO : <input type="text" id="licenceNO" class="form-control" onChange={(e) => setLicenceNo(e.target.value)}  {...register("licenceNO",{required: true})}/>
                <div className='mb-1'>
                {errors.licenceNO && errors.licenceNO.type === "required" && <span className='error'>LicenceNO is required</span>}
                </div>
                {/* <div className='mb-3'> */}
                    Rating : <input type="number"  id="rating" class="form-control"onChange={(e) => setrating(e.target.value)}  {...register("rating",{required: true,max:5,min:0})}/>
                {/* </div> */}
                <div className='mb-1'>
                {errors.rating && errors.rating.type === "required" && <span className='error'>Rating is required</span>}
                {errors.rating && errors.rating.type === "max" && <span className='error'>Rating should be less than 5</span>}
                {errors.rating && errors.rating.type === "min" && <span className='error'>Rating should be greater than 0</span>}
                </div>
                <marquee direction="right" ><span className='success' style={{color:'orange'}}><b>{message}</b>  </span ><br></br></marquee>
                
            </div>
            <div className="text-center">
                    <button type="submit" className="btn btn-danger">Update</button>
            </div>
            
        </form>
    </div>
  )
}
export default Driver;
