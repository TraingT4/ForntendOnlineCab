import React from 'react';
import { Link } from 'react-router-dom';
//import Navigation from './Navigation';



function NextSection() {
    return (
      <header className=" Cointainer-fluid header">
        
  
        <div className=" " >
          <table width='100'>
            <tr>
              <td>
              <h1 className=" b" >Find your Perfect and comfortable ride</h1>
              <p className="  b">
                  With our years of experience, we are exactly what you are looking for.
                  Classy rides that meets your taste.
              </p>
              </td>
            </tr>
          </table>
          <p>
            <Link className="btn btn-primary" to="/customerLogin">Hire Now</Link>
          </p>
        </div>
      </header>
    );
  }
  export default NextSection;