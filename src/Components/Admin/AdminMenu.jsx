import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

let AdminMenu = (props) => {
    let navigate = useNavigate();
    const initialMenus = [ 
                 {label:'Cab Module', color:'btn btn-primary m-1', path:'/cab'},
                 {label:'Customer Module', color:'btn btn-primary m-1', path:'/customer'},
                 {label:'Driver Module', color:'btn btn-primary m-1', path:'/driver'},
                 {label:'Tripbooking Module', color:'btn btn-primary m-1', path:'/tripbooking'}
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

export default AdminMenu; 