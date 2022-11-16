import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = (props) => {
    const name = props.name;
    const navigate = useNavigate();
  
    useEffect(() => {
        const user = localStorage.getItem("user");
        if(user == null){
            navigate("/main");
        }
    });

    return (<div></div>)
}

export default AuthGuard; 