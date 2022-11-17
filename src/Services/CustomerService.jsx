import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9090/api/customers";

class CustomerService {

    getCustomers(){
        return axios.get(apiPath+'/');
    }

    addCustomer(customer){
        return axios.post(apiPath+"/",customer);
    }

    getCustomer(id){
        return axios.get(apiPath+'/'+id);
    }

    deleteCustomer(id){
        return axios.delete(apiPath+"/"+id);
    }

    updateCustomer( customer){
        return axios.put(apiPath+"/", customer);
    }
}
export default new CustomerService;