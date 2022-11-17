import React from 'react';

import th from "../../images/th.jpg";
const LastFooter=()=>{


    return(
        
            <section className="container-fluid w-auto h-5 d-flex bg-gray mainfooter justify-content-center text-center">
              <div>
                  <img className="logo" src={th} alt="Car Rentals" />
             <b> <p >Carbbookkaro<br />+237 672-526-097</p>
              <p>
                Carbookkaro
                
                var Date={new Date().getFullYear()}
                . All rights reserved
              </p></b>
              </div>
            </section>
        
          );
        }
    

export default LastFooter;