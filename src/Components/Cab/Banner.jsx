import React, { useEffect, useState } from "react";

const Banner = () => {
    const [user, setUser] = useState();
    const [logout, setLogout] = useState();

    useEffect(() => {
        const userName = localStorage.getItem("user");
        if(userName !=null && userName.length > 0){
            setUser("Welcome "+userName);
            setLogout("Logout");
        }        
    },[user]);
    
        return (
                   <div>
                        <div className="container-fluid h-5 bg-warning banner d-flex justify-content-center pt-3 text-warning">
                            <h1>Online Cab Booking System</h1>
                            
                            <div className="w-25 profile">
                                <h4>{user}</h4>
                            </div>
                            <a href='/logout' className='link bg-success rounded-circle'>{logout}</a>
                        </div>
                   </div>
                   );    
}

export default Banner;