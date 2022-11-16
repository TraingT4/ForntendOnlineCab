import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthGuard from "../Login/AuthGuard";
import  { useEffect, useReducer } from "react";

let Menu1 = (props) => {
    const name = props.name;
    let navigate = useNavigate();
    const initialMenus = [ 
                
                 {label:'View All Trips ', color:'btn btn-primary m-1', path:'/showtrips', role:['user']},
                 {label:'Add Trips ', color:'btn btn-primary m-1', path:'/addtripbooking',role:['user']},
                 {label:'All Availabel Cabs', color:'btn btn-primary m-1', path:'/customerCabs', role:['user']}
          ];

    const [menus, setMenus] = useState(initialMenus);
    
    const [role , setRole] = useState(); 
    
    const search = () => {

    }
    useEffect(() => {
        let user = localStorage.getItem("user");
        if(user != null){
            user = JSON.parse(user);
            setRole(user.role);
        }
        
    });
   

        return (<div className="container pr-5 d-flex justify-content-between">
             <AuthGuard name={name}/>
                <div>
                {
                    menus.map( menu => (
                        <a href={menu.path} className={menu.color}>{menu.label}</a>
                    ))
                }
                </div>
              </div>);
    
}

export default Menu1; 