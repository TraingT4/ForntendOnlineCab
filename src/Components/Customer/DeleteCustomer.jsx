import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import CustomerService from "../../Services/CustomerService";
import CustomerMenu from "./CustomerMenu";



const DeleteCustomer = () => {
    const {id} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        CustomerService.deleteCustomer(id).then(response => {
            if(response.status === 204){
                console.log("Deleted customer Successfully. customer ID :: "+id);
                setMessage("Deleted customer  Successfully. customer Id::"+id);
            }
        }).catch(e => console.log("Exception while deleteing customer. customer Id:: "+id))
    },[]);

    return (
        <div>
            <div className='conatiner'> 
                <CustomerMenu name="Home"/>
           </div>
            <div className="container w-25 p-5 login-title">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/customers">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteCustomer;