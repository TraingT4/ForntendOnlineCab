import React from "react";
import Home from "./Home";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

let Menu1 = (props) => {
    let navigate = useNavigate();
    const initialMenus = [ 
                
                 {label:'View All Trips ', color:'btn btn-primary m-1', path:'/showtrips'},
                 {label:'Add Trips ', color:'btn btn-primary m-1', path:'/tripbooking'}
          ];

    const [menus, setMenus] = useState(initialMenus);
    const search = () => {

    }

   /* menus.map(menu => {
            if(menu.label === props.name){
                menu.color = 'btn btn-dark';
              }else{
                menu.color = 'btn btn-primary';
            }
            setMenus(menus);
    })*/
   

        return (<div className="container pr-5 bg-dark d-flex justify-content-between">
                <div>
                {
                    menus.map( menu => (
                        <a href={menu.path} className={menu.color}>{menu.label}</a>
                    ))
                }
                </div>
                <div className="d-flex justify-content-end">
                    <input type="text" className="form-control rounded"/>
                    <button type="button" class="btn btn-primary rounded-circle m-1" onClick={search}>Search</button>
                </div>
              </div>);
    
}

export default Menu1; 