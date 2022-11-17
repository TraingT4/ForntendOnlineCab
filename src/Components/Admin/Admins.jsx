import { useEffect, useState } from "react";
import AdminService from "../../Services/AdminService";
import Menu from "./../Home/Menu";

const Admins = () => {
    const [admins, setAdmins] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    
    useEffect(() => {
        AdminService.getAdmins().then(response => {
            setAdmins(response.data);
        }).catch( error => [
            console.log("Error while fetching admin info "+error)
        ])
    },[]);

    const search = (event) => {
        setSearchStr(event.target.value);
    }


    return (
        <div className="container">
            <Menu name="Home"/>            
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} />       
                </div>
                <table className="table table-striped table-bordered table-hover bg-info">
                    <thead className="table-gray text-danger">
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            admins.map(admin => (
                                <tr>
                                    <td>{admin.adminId}</td>
                                    <td>{admin.username}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.mobileNumber}</td>
                                    <td>{admin.address}</td>
                                    <td><a className="btn btn-danger m-1" href={"/deleteAdmin/"+admin.adminId}>Delete</a>
                                    <a className="btn btn-primary m-1" href={"/updateAdmin/"+admin.adminId}>Update</a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admins;