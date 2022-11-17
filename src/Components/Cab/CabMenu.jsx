import React from "react";
import Home from "./CabHome";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthGuard from "../Login/AuthGuard";

let CabMenu = (props) => {
    const name = props.name;
    let navigate = useNavigate();
    const initialMenus = [ 
                 {label:'Home', color:'btn btn-lg btn-dark m-1', path:'/adminHome'}, 
                 {label:'Show all Cabs', color:'btn btn-lg btn-dark m-1', path:'/cabs'},
                 {label:'Add Cab', color:'btn btn-lg btn-dark m-1', path:'/addCab'},
                 {label:'Cab Count', color:'btn btn-lg btn-dark m-1', path:'/cabType'},
                 {label:'Go Back', color:'btn btn-lg btn-dark m-1', path:'/cab'}
                ];

    const [menus, setMenus] = useState(initialMenus);
    const search = () => {

    }
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

export default CabMenu; 