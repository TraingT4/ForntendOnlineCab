import React from 'react';

import th from "../../images/th.jpg";
const LastFooter=()=>{


    return(
       
            <section className="container-fluid h-5 bg-warning  d-flex justify-content-center">
              <div>
                  <img className="logo" src={th} alt="Car Rentals" />
              <p >Carbbookkaro<br />+237 672-526-097</p>
              
              <p>
                Carbookkaro
                
                var Date={new Date().getFullYear()}
                . All rights reserved
              </p>
              </div>
            </section>
        
          );
        }
    

export default LastFooter;