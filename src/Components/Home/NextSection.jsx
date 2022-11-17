import React from 'react';
import { Link } from 'react-router-dom';
//import Navigation from './Navigation';



function NextSection() {
    return (
      // <header className=" Cointainer-fluid header">
        
  
      //   <div className="header-content " >
      //     <table width={50}>
      //       <tr>
      //         <td>
      //         <h1 className="header-Content header_title b text-white text-center" >Find your Perfect and comfortable ride</h1>
      //         <p className="header-content header_desc  b text-white">
      //             With our years of experience, we are exactly what you are looking for.
      //             Classy rides that meets your taste.
      //         </p>
      //         </td>
      //       </tr>
      //     </table>
      //     <p>
      //       <Link className="btn btn-primary" to="/register">Hire Now</Link>
      //     </p>
      //   </div>
      // </header>

      <header>
        <div className="header-content text-center" >
      <h1 className="header-Content header_title b text-dark text-center" >Find your Perfect and comfortable ride</h1>
            <b><p className="header-content header_desc  b text-dark text-center">
                With our years of experience, we are exactly what you are looking for.
                Classy rides that meets your taste.
            </p></b>
        <p>
          <Link className="btn btn-primary text-center bg-success" to="/register"><b>Hire Now</b></Link>
        </p>
      </div>
    </header>
    );
  }
  export default NextSection;