import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import LoginService from '../../Services/LoginService';


const Login = (props) => {

    let [message, setMessage] = useState("");
   
    let [ errorMessage, setErrorMessage ] = useState("");

    let { register, handleSubmit, formState: {errors}} = useForm();
    let navigate = useNavigate();
    
   
    
    const ValidateForm = (loginInfo) => {
        localStorage.setItem("user", JSON.stringify({name: loginInfo.userName, role: 'admin'}));
        const login={adminId:loginInfo.userName,username:null,password:loginInfo.password,email:null,mobileNumber:null,address:null}

        LoginService.loginAdmin(login).then(response => {
            if(response.status === 202){
                alert("Login Successfully ");
                navigate('/adminHome');
                
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
                <form onSubmit={handleSubmit(ValidateForm)}>
                    <label htmlFor=''>User Name: </label>
                    <input 
                        className="form-control" 
                        type="Number" 
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
                     <div className="col d-flex justify-content-center pt-">
                            <br></br>
                            <button type="submit" className="btn btn-lg btn-primary m-3">Login</button>
                            <br/>
                    </div>
                </form>
            </div>
        </div>
     
        

    );


}

export default Login;