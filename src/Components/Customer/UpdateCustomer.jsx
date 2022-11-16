import CustomerMenu from "./CustomerMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomerService from "../../Services/CustomerService";
import { useForm } from "react-hook-form";

const UpdateCustomer = () => {
    const { id } = useParams();   
    const [message , setMessage] = useState(""); 
    const [customer, setCustomer] = useState({});
    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();

    const updateCustomer = (customer) => {
        CustomerService.updateCustomer(customer).then(response => {
            if(response.status === 200){
                setMessage("Customer Updated Successfully");
            }
        })
    }
    useEffect(() => {
        CustomerService.getCustomer(id).then(response => {
            setCustomer(response.data);
         //   alert(document.getElementById("customerId"));
        //    alert(document.getElementById('customerId').value);
            document.getElementById('customerId').value=response.data.customerId;
        //     alert(document.getElementById('customerId').value);
            document.getElementById('username').value=response.data.username;
            document.getElementById('password').value=response.data.password;
            document.getElementById('email').value=response.data.email;
            document.getElementById('mobileNumber').value=response.data.mobileNumber;
            document.getElementById('address').value=response.data.address;
            
        }).catch(e => console.log("Exception while fetching customer info "+e));
    },[]);



    return (
        <div>
            <CustomerMenu name="CustomerMenu"/>
            <div className="container w-50 bg-info form">
                <h4>Update Customer</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateCustomer)}> 
                <div className="row">
                        <div className="col">
                            <label htmlFor="">Id: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="customerId"
                                readOnly
                                { ...register("customerId", {required: true}) }
                            />
                            {errors.customerId && errors.customerId.type === "required" && <span className='error'>Id is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Name: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                id="username"
                                
                                defaultValue=""
                                onChange={(e) => setName(e.target.value)}
                                { ...register("username", {required: true} ) }
                            />
                            {errors.username && errors.username.type === "required" && <span className='error'>Name is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Email: </label>
                            <input 
                                className="form-control" 
                                type="email" 
                                id="email"
                               
                                { ...register("email", {required: true}) }
                            />
                            {errors.email && errors.email.type === "required" && <span className='error'>Email is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password: </label>
                            <input 
                                className="form-control" 
                                type="password" 
                                id="password"
                                
                                { ...register("password", {required: true}) }
                            />
                            {errors.password && errors.password.type === "required" && <span className='error'>Password is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Phone Number: </label>
                            <input 
                                className="form-control" 
                                type="number" 
                                id="mobileNumber"
                               
                                { ...register("mobileNumber", {required: true, minLength:10, maxLength:10 }) }    
                            />
                            {errors.mobileNumber && errors.mobileNumber.type === "required" && <span className='error'>Phone Number is required</span>}
                            {errors.mobileNumber && errors.mobileNumber.type === "minLength" && <span className='error'>Phone Number must contains 10 digits</span>}
                            {errors.mobileNumber && errors.mobileNumber.type === "maxLength" && <span className='error'>Phone Number must contais maximum 10 digits</span>}
                            {errors.mobileNumber && errors.mobileNumber.type === "valueAsNumber" && <span className='error'>Phone Number must contais digits</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Address: </label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="address"
                               // value={customer.address}
                                { ...register("address", {required: true}) }
                            />
                            {errors.address && errors.address.type === "required" && <span className='error'>Address is required</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex jutify-contet-center">
                            <br></br>
                            <button type="submit" className="btn btn-primary">Update</button>
                            <a href="/customers" className="btn btn-primary m-1">Go Back</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );

}

export default UpdateCustomer;