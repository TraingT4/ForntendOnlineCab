import React, { useEffect, useState } from "react";

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
                        <div className="container-fluid h-5 bg-primary banner d-flex justify-content-center pt-3 text-warning">
                            <h1>Online Cab Booking</h1>
                            
                            <div className="w-25 profile">
                                <h4>{user}</h4>
                            </div>
                            <a href='/logout' className='link bg-success rounded-circle'>{logout}</a>
                        </div>
                   </div>
                   );    
}

export default Banner;