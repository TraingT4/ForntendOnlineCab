import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DriverService from '../../Services/DriverService';

const DeleteDriver = () => {

    const {id} = useParams();
    const [message, setMessage] = useState("no message");

    useEffect(() => {
        DriverService.deleteDriver(id).then(response => {
            if(response.status === 204){
                setMessage(" Driver deleted  Successfully of id:"+id);
            }
        }).catch(e => console.log("Exception while deleteing driver. Driver Id:: "+id))
    },[]);
  return (
    <div className='mt-5 pt-5 text-center'>
            <marquee direction="right"><h3 className='text-danger'>{message}</h3></marquee>
        <a className="btn btn-danger"href="/drivers">Go Back</a>
    </div>
  )
}

export default DeleteDriver;
