import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9090/login";


class LoginService {

    loginAdmin(loginInfo){
    return axios.post(apiPath+"/admin", loginInfo);
}
    

loginCustomer(customerInfo){
    return axios.post(apiPath+"/customer", customerInfo);
}

}
export default new LoginService;