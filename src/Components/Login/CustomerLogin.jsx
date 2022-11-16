import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import LoginService from '../../Services/LoginService';

const CustomerLogin = (props) => {

    let [message, setMessage] = useState("");
    let [ errorMessage, setErrorMessage ] = useState("");

    let { register, handleSubmit, formState: {errors}} = useForm();
    let navigate = useNavigate();
  
    
    const ValidateCustomer = (CustomerInfo) => {
        localStorage.setItem("user", JSON.stringify({name: CustomerInfo.userName, role: 'user'}));
        const login={customerId:CustomerInfo.userName,username:null,password:CustomerInfo.password,email:null,mobileNumber:null,address:null,tripBooking:null}

        LoginService.loginCustomer(login).then(response => {
            localStorage.setItem("customerId",CustomerInfo.userName)
            if(response.status === 202){
                alert("Login Successfully ");
                navigate('/home1');
                
            }
            
            

        }).catch(error=>
            {
                setMessage(error.response.data);
            }
            
           
            );

    }
    
    return (
        <div>
            <div className="container w-25 login-title" ><h1>{props.data.title}</h1>
            </div>

            <div className="container w-25 border rounded border-primary bg-info p-5" >
                <span className='error'>{message}</span>
                <form onSubmit={handleSubmit(ValidateCustomer)}>
                    <label htmlFor=''>User Name: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id='userName'
                        placeholder={props.data.userName} 
                        { ...register("userName", {required: true})}
                     />
                     { errors.userName && errors.userName.type === 'required' && <span className='error'>User Name is required</span>}
                    <br></br>
                    <label htmlFor=''> Password: </label>
                    <input 
                        className="form-control" 
                        type="password" 
                        placeholder={props.data.password} 
                        { ...register("password", {required: true})}
                    />
                     { errors.password && errors.password.type === 'required' && <span className='error'>Password is required</span>}
                     <div className="col d-flex justify-content-center pt-1">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-primary m-3">Login</button>
                    </div>
                    <div className="col d-flex justify-content-center pt-1">
                            <p>Are You New?</p>
                            <a href={"/addCustomers"}>Register</a>
                            
                     </div>
                </form>
            </div>
        </div>
     
        

    );


}

export default CustomerLogin;