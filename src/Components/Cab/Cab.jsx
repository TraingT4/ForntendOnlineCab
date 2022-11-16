import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CabService from "../../Services/CabService";
import CabMenu from "./CabMenu";

const Cabs = () => {
    const { id } = useParams();
    const [cab, setCab] = useState([]);
    const cabUrl = "/cabs/";
    const [searchStr, setSearchStr] = useState("");
    
    useEffect(() => {
        CabService.getCabById(id).then(response => {
            setCab(response.data);
        }).catch( error => [
            console.log("Error while fetching cab info "+error)
        ])
    },[]);

    const search = (event) => {
        setSearchStr(event.target.value);
    }


    return (
        <div className="container">
            <CabMenu name="CabHome"/>         
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} />       
                </div>
                <table className="table table-striped table-bordered table-hover bg-info">
                    <thead className="table-gray text-danger">
                        <tr>
                            <th>Id</th>
                            <th>carType</th>
                            <th>Charge</th>
                            <th>DriverId</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                                <tr>
                                    <td>{cab.cabId}</td>
                                    <td>{cab.carType}</td>
                                    <td>{cab.perKmRate}</td>
                                    <td>{cab.driver}</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cabs;