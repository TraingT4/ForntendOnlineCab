import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthGuard from "../Login/AuthGuard";
let TripBookingMenu = (props) => {
    const name = props.name;
    let navigate = useNavigate();
    const initialMenus = [ 
                {label:'Home', color:'btn btn-lg btn-dark m-1', path:'/adminHome'}, 
                {label:'Trip Details', color:'btn btn-lg btn-dark m-1', path:'/viewtrips'}
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
export default TripBookingMenu; 