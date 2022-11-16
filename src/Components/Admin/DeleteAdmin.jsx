import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AdminService from "../Services/AdminService";
import Menu from "./Menu";



const DeleteCab = () => {
    const {id} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        AdminService.deleteAdmin(id).then(response => {
            if(response.status === 204){
                setMessage("Deleted Admin Successfully. Admin Id:"+id);
            }
        }).catch(error=>{
            setMessage(error.response.data);
         })});

    return (
        <div>
            <div className='conatiner'> 
                <Menu name="Home"/>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/home">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteCab;