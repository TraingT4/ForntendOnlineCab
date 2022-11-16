import { useEffect } from "react";

const Logout = () =>{
    useEffect(() => {
        localStorage.removeItem("user");   
    })
    return (
        <div className="container w-50 pt-5 broder rounded bg-warning p-5 mt-5">
            <h4>Logged Out Successfully.</h4>
            <a href="/main">Click</a> here to login again
        </div>
    );
}

export default Logout;