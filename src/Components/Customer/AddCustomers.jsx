import { useState } from 'react';
import {useForm} from 'react-hook-form';
import CustomerService from "../../Services/CustomerService";
import CustomerMenu from './CustomerMenu';

const AddCustomer = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();

    const addCustomer = (customer) => {

        const customerInfo={username:customer.name,password:customer.password,email:customer.email,mobileNumber:customer.mobileNumber,address:customer.address,tripBooking:null};
       // alert(JSON.stringify(customerInfo));
        CustomerService.addCustomer(customerInfo).then(response => {
            if(response.status === 201){
                setMessage("Customer Added Successfully. Customer ID : "+response.data.customerId+"\n" +"Click on Go To Login . Yours UserName is your Customer Id and password is Your Passwourd");
            }
        })
    }

    return(
        <div className='conatiner'> 
            <div className="container w-50 bg-info form">
                <h4>Add Customer</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(addCustomer)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">UserName: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                { ...register("name", {required: true} ) }
                            />
                            {errors.name && errors.name.type === "required" && <span className='error'>UserName is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password: </label>
                            <input 
                                className="form-control" 
                                type="password"
                                { ...register("password", {required: true} ) }
                            />
                            {errors.name && errors.name.type === "required" && <span className='error'>Password is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Email: </label>
                            <input 
                                className="form-control" 
                                type="email" 
                                { ...register("email", {required: true}) }
                            />
                            {errors.email && errors.email.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Phone Number: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                { ...register("mobileNumber", {required: true, minLength:10, maxLength:10 }) }    
                            />
                            {errors.phoneNumber && errors.phoneNumber.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.phoneNumber && errors.phoneNumber.type === "minLength" && <span className='error'>Phone Number must contains 10 digits</span>}
                            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && <span className='error'>Phone Number must contais maximum 10 digits</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Address: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                { ...register("address", {required: true} ) }
                            />
                            {errors.name && errors.name.type === "required" && <span className='error'>Address is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex jutify-contet-center">
                            <br></br>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <p1>If Already register <a href='/customerlogin'>Go To Login</a></p1>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCustomer;