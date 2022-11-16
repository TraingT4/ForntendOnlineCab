import { useEffect, useState } from "react";
import CabService from "../../Services/CabService";
import CabMenu from "./CabMenu";

const Cabs = () => {
    const [cabs, setCabs] = useState([]);
    const cabUrl = "/cabs/";
    const [searchStr, setSearchStr] = useState("");
    
    useEffect(() => {
        CabService.getCabs().then(response => {
            setCabs(response.data);
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
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            cabs.filter(ca => (ca.carType.toLowerCase().includes(searchStr.toLowerCase()) )).map(cab => (
                                <tr>
                                    <td>{cab.cabId}</td>
                                    <td>{cab.carType}</td>
                                    <td>{cab.perKmRate}</td>
                                    <td>{cab.driver}</td>
                                    <td><a className="btn btn-danger m-1" href={"/deleteCab/"+cab.cabId}>Delete</a>
                                    <a className="btn btn-primary m-1" href={"/showCab/"+cab.cabId}>Show</a>
                                    <a className="btn btn-primary m-1" href={"/updateCab/"+cab.cabId}>Update</a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cabs;