import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9090/api/cabs";

class CabService {

    getCabs(){
        return axios.get(apiPath+'/');
    }
    getCabCount(type)
    {
        return axios.get(apiPath+'/count/'+type).then(response => {
          return response;
        });
    }
    saveCab(id, cab)
    {
        return axios.post(apiPath+"/"+id,cab);
    }
    updateCab(cab)
    {
        return axios.put(apiPath+"/",cab);
    }
    deleteCab(id){
        return axios.delete(apiPath+"/"+id);
    }
    getCabById(id)
    {
        return axios.get(apiPath+'/id/'+id);
    }
}
export default new CabService;