import { useState } from 'react';
import {useForm} from 'react-hook-form';
import AdminService from "../Services/AdminService";
import Menu from './Menu';

const AddAdmin = () => {
    let [message, setMessage] = useState("");
    let { register, handleSubmit, formState: {errors}} = useForm();

    const addCustomer = (admin) => {

        alert(JSON.stringify(admin));
        AdminService.saveAdmin(admin).then(response => {
            if(response.status === 201){
                setMessage("Admin Added Successfully. Admin ID : "+response.data.adminId);
            }
        }).catch(errors=>{
            setMessage(errors.response.data);
        })
    }

    return(
        <div className='conatiner'> 
            <Menu name="Home"/>
            <div className="container w-50 bg-info form">
                <h4>Add Admin</h4>  
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
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddAdmin;