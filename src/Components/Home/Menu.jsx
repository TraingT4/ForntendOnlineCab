import React, { useEffect, useReducer } from "react";
import Home from "./Home";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthGuard from "../Login/AuthGuard";

let Menu = (props) => {
    const name = props.name;
    let navigate = useNavigate();
    const initialMenus = [ 
        {label:'Cab Module', color:'btn btn-primary m-1', path:'/cab',role:['admin',]},
        {label:'Customer Module', color:'btn btn-primary m-1', path:'/customer',role:['admin']},
        {label:'Driver Module', color:'btn btn-primary m-1', path:'/driver',role:['admin']},
        {label:'Tripbooking Module', color:'btn btn-primary m-1', path:'/tripbooking',role:['admin']},
        {label:'View All Trips ', color:'btn btn-primary m-1', path:'/showtrips',role:[,'user']},
        {label:'Add Trips ', color:'btn btn-primary m-1', path:'/addtripbooking',role:['user']},
        {label:'All Availabel Cabs', color:'btn btn-primary m-1', path:'/customerCabs',role:['user']}
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

   /* menus.map(menu => {
            if(menu.label === props.name){
                menu.color = 'btn btn-dark';
              }else{
                menu.color = 'btn btn-primary';
            }
            setMenus(menus);
    })*/
   

        return (<div>
                    <AuthGuard name={name}/>
                    <div className="container pr-5 bg-dark d-flex justify-content-between">
                        <div>
                        {
                            menus.filter(menu => menu.role.includes(role)).map( menu => (
                                    <a href={menu.path} className={menu.color}>{menu.label}</a>
                            ))
                        }
                        </div>
                        <div className="d-flex justify-content-end">
                            <input type="text" className="form-control rounded"/>
                            <button type="button" class="btn btn-primary rounded-circle m-1" onClick={search}>Search</button>
                        </div>
                    </div>
                </div>
                );
    
}

export default Menu; 