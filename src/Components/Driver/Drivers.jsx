import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useEffect } from 'react';
import DriverService from '../../Services/DriverService';
// import Drivers from './Drivers';
import DriverTable from './DriverTable';
import DriverGrid from './DriverGrid';
import { Navigate } from 'react-router';

const Drivers = () => {

    const [drivers, setDrivers] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [gridLayout, setGridLayout] = useState(false);
    const [TableLayout, setTableLayout] = useState(true);

    useEffect(() => {
        DriverService.getDrivers().then(response => {
          //console.log(response);
          setDrivers(response.data);
      }).catch( error => [
          console.log("Error while fetching employees info "+error)
      ])
  });

  const viewGrid = () => {
    setGridLayout(true);
    setTableLayout(false);
   };
   const viewTable = () => {
    setGridLayout(false);
    setTableLayout(true);
   };
   

  return (
    <div >       
    <div className=" pt-3 ">
    <div className=' mt-5 pt-1  text-center bg-dark text-white'>
                    <h2 style={{color:'orange'}}>Drivers details</h2>
                </div>
        <div className="container-fluid d-flex pt-5 pl-2">
            <input type="text" className="form-control rounded w-25 mb-2" onChange={(e)=>setSearchValue(e.target.value)} />   
            {/* <button type="text" className="btn btn-primary m-1 mb-2" onClick={() => search(true)}>Grid</button> */}

            <button type="text" className="btn btn-primary m-1 mb-2" onClick={viewGrid}>Grid</button>
            <button type="text" className="btn btn-primary m-1 mb-2" onClick={viewTable}>Table</button>
            <a href='/add'> <button className=" mt-1 btn btn-success">Add driver</button> </a>
        </div>
        <div>
            { gridLayout === true && <DriverGrid drivers={drivers} searchStr={searchValue}/> }
            { TableLayout === true && <DriverTable drivers={drivers} searchStr={searchValue}/> }
        </div>
        
    </div>
    </div>
                  
  )
  }
  export default Drivers;