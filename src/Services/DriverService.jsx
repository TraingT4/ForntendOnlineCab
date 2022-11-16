import axios from "axios";
const apiPath = "http://localhost:9090/api/drivers";


class driverService {

    getDrivers(){
        return axios.get(apiPath+'/');
    }

    getDriver(id){
        return axios.get(apiPath+'/'+id);
    }

    saveDriver(driver){
        return axios.post(apiPath+"/", driver);
    }

    deleteDriver(id){
        return axios.delete(apiPath+"/"+id);
    }

    updateDriver(id, driver){
        return axios.put(apiPath+"/"+id, driver);
    }
}
export default new driverService;