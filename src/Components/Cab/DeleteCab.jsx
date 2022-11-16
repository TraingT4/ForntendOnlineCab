import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import CabService from "../../Services/CabService";
import CabMenu from "./CabMenu";



const DeleteCab = () => {
    const {id} = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        CabService.deleteCab(id).then(response => {
            if(response.status === 204){
                setMessage("Deleted Cab Successfully. Cab Id:"+id);
            }
        })});

    return (
        <div>
            <div className='conatiner'> 
                <CabMenu name="Home"/>
                <button className="btn btn-lg btn-primary m-3"><a href="/cabs">Go Back</a></button>
           </div>
            <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
                <p className="success">{message}</p><br></br>
                <a className="btn btn-success"href="/cab">Go Back</a>
            </div>
        </div>    
    )
}

export default DeleteCab;