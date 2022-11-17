import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div>
         <section className="container-fluid call-action">
      <h4><b>Be where you want to be on time with our confort rides</b></h4>
      <p>
        <Link className="btn btn-oval bg-success" to="/customerlogin"><b>Book your ride</b></Link>
      </p>
      
    </section>
    </div>
   

  );
}