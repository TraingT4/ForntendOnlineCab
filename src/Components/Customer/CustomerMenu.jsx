import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

let CustomerMenu = (props) => {
    let navigate = useNavigate();
    const initialMenus = [ 
                {label:'Home', color:'btn btn-primary m-1', path:'/adminHome'}, 
                {label:'Show Customers', color:'btn btn-primary m-1', path:'/customers'}
                ];

    const [menus, setMenus] = useState(initialMenus);
    const search = () => {

    }
        return (<div className="container pr-5 d-flex justify-content-between">
                <div>
                {
                    menus.map( menu => (
                        <a href={menu.path} className={menu.color}>{menu.label}</a>
                    ))
                }
                </div>
              </div>);
    
}
export default CustomerMenu; 