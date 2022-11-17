import React, { useEffect, useReducer } from "react";
import Home from "./Home";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthGuard from "../Login/AuthGuard";

let Menu = (props) => {
    const name = props.name;
    let navigate = useNavigate();
    const initialMenus = [ 
        {label:'Cab Module', color:'btn btn-lg btn-dark m-2', path:'/cab',role:['admin',]},
        {label:'Customer Module', color:'btn btn-lg btn-dark m-2', path:'/customer',role:['admin']},
        {label:'Driver Module', color:'btn btn-lg btn-dark m-2', path:'/driver',role:['admin']},
        {label:'Tripbooking Module', color:'btn btn-lg btn-dark m-2', path:'/tripbooking',role:['admin']},
        {label:'Add Admin', color:'btn btn-lg btn-dark m-2', path:'/addAdmin',role:['admin']},
        {label:'Show Admin', color:'btn btn-lg btn-dark m-2', path:'/showAdmin',role:['admin']},
        {label:'View All Trips ', color:'btn btn-lg btn-dark m-2', path:'/showtrips',role:[,'user']},
        {label:'Book a Trip ', color:'btn btn-lg btn-dark m-2', path:'/addtripbooking',role:['user']},
        {label:'All Availabel Cabs', color:'btn btn-lg btn-dark m-2', path:'/customerCabs',role:['user']}
          ];
          
    const [role , setRole] = useState(); 
    const [menus, setMenus] = useState(initialMenus);
    const search = () => {

    }
    useEffect(() => {
        let user = localStorage.getItem("user");
        if(user != null){
            user = JSON.parse(user);
            setRole(user.role);
        }
        
    });


        return (<div>
                    <AuthGuard name={name}/>
                    <div className="container pr-5 d-flex justify-content-between">
                        <div>
                        {
                            menus.filter(menu => menu.role.includes(role)).map( menu => (
                                    <a href={menu.path} className={menu.color}>{menu.label}</a>
                            ))
                        }
                        </div>
                    </div>
                </div>
                );
    
}

export default Menu; 