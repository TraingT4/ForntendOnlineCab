import React, { useEffect, useState } from "react";

import goldencar from "../../images/goldencar.jpg";


const Banner = () => {
    const [user, setUser] = useState();
    const [logout, setLogout] = useState();

    useEffect(() => {
        let userObj = localStorage.getItem("user");
        if(userObj !=null){
            userObj = JSON.parse(userObj);
            setUser("Welcome "+userObj.name);
            setLogout("Logout");
        }        
    },[]);
    
        return (
                   <div>
                        <div className="container-fluid h-5  banner d-flex justify-content-center ">
                           {/* <img src="goldercar.jpg" align="left"/> */}
                        <div className="container-fluid d-flex mt-5 text2 justify-content-center ">
                            <h1 className="text-white"><b>CARBOOKKARO.COM</b></h1>
                        </div>
                            <div className="w-25 profile">
                                <h4>{user}</h4>
                            </div>
                            <a href='/logout' className='link bg-success rounded-circle'>{logout}</a>
                        </div>
                       
                       
                   </div>
                   );    
}

export default Banner;