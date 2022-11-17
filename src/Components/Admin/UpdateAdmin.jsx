import Menu from "./../Home/Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";
import { useForm } from "react-hook-form";

const UpdateAdmin = () => {
    const { id } = useParams();   
    const [message , setMessage] = useState(""); 
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [admin, setAdmin]=useState({});

    const updateAdmin = (admin) => {
        const adminInfo={adminId:id,username:admin.username,password:admin.password,email:admin.email,mobileNumber:admin.mobileNumber,address:admin.address};
        AdminService.updateAdmin(adminInfo).then(response => {
            if(response.status === 200){
                setMessage("Admin details updated Successfully");
            }
        }).catch(error=>{
            setMessage(error.response.data);
         })
    }
    useEffect(() => {
        AdminService.getAdminById(id).then(response => {
            setAdmin(response.data);
            document.getElementById('username').value=response.data.username;
            document.getElementById('password').value=response.data.password;
            document.getElementById('email').value=response.data.email;
            document.getElementById('mobileNumber').value=response.data.mobileNumber;
            document.getElementById('address').value=response.data.address;
            
        }).catch(e => console.log("Exception while fetching customer info "+e));
    },[]);

    return(
        <div className='conatiner'> 
            <Menu name="Home"/>
            <div className="container w-50 bg-info form">
                <h4>Update Admin</h4>  
                <span className='success'>{message}</span>
                <form onSubmit={handleSubmit(updateAdmin)}> 
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">UserName: </label>
                            <input 
                                className="form-control" 
                                type="text"
                                id="username"
                                { ...register("username", {required: true} ) }
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
                                id="password"
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
                                id="email"
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
                                type="text" 
                                id="mobileNumber"
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
                                id="address"
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

export default UpdateAdmin;