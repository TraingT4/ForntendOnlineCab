import { useEffect, useState } from "react";
import CustomerService from "../../Services/CustomerService";
import CustomerMenu from "./CustomerMenu";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const customerUrl = "/customer/";
    const [searchStr, setSearchStr] = useState("");
   
    useEffect(() => {
        CustomerService.getCustomers().then(response => {
            //console.log(response);
            setCustomers(response.data);
        }).catch( error => [
            console.log("Error while fetching customer info "+error)
        ])
    },[]);

    const search = (event) => {
        setSearchStr(event.target.value);
    }


    return (
        <div className="container">
            <CustomerMenu name="CustomerHome"/>            
            <div className="container pt-5 ">
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded w-25 mb-2" onChange={search} />       
                </div>
                <table className="table table-striped table-bordered table-hover bg-info">
                    <thead className="table-gray text-danger">
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>UserName</th>
                            <th>Address</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            customers.map(cust => (
                                <tr>
                                    <td>{cust.customerId}</td>
                                    <td>{cust.email}</td>
                                    <td>{cust.username}</td>
                                    <td>{cust.address}</td>
                                    <td>{cust.mobileNumber}</td>
                                    <tr>
                                        <td><a className="btn btn-secondary m-1" href={"/customer/"+cust.customerId}>Show</a></td>
                                        <td><a className="btn btn-warning m-1" href={"/updateCustomer/"+cust.customerId}>Update</a></td>
                                        <td><a className="btn btn-danger m-1" href={"/deleteCustomer/"+cust.customerId}>Delete</a></td>
                                    </tr>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customers;