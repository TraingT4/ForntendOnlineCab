import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9090/api/admins";

class AdminService {

    saveAdmin(admin)
    {
        return axios.post(apiPath+"/",admin);
    }
    updateAdmin( admin)
    {
        return axios.put(apiPath+"/",admin);
    }
    deleteAdmin(id){
        return axios.delete(apiPath+"/"+id);
    }
    getAdmins()
    {
        return axios.get(apiPath+'/');
    }
}
export default new AdminService;