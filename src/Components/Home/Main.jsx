import React from "react";

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
let Main =() =>{

let navigate = useNavigate();
const initialMenus = [ 
             {label:'About', color:'btn btn-primary m-1', path:'/about'}, 
             {label:'Cars', color:'btn btn-primary m-1', path:'/Cars'}, 
             {label:'CustomerLogin', color:'btn btn-primary m-1', path:'/customerlogin'}, 
             {label:'Login', color:'btn btn-primary m-1', path:'/login'}, 
             
            
      ];

const [main, setMain] = useState(initialMenus);

return (<div className="container pr-5 bg-dark d-flex justify-content-between">
    
<div>
{
    main.map( main => (
        <a href={main.path} className={main.color}>{main.label}</a>
    ))
}
  </div>
</div>
);
}
export default Main;