import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

export default function Viewcomplaints() 
{
    const[complaintslist,setComplaintslist]=useState([]);  //Display list of complaints
    const navigate=useNavigate();
  
    useEffect(() => {
        getallpostedcomplaints();
    }, []);



  function getallpostedcomplaints()
  {
    axios
    .get("http://localhost:8080/getallpostedcomplaints")
        .then((res) => {
            setComplaintslist(res.data);
        })
        .catch((err) => {
            toast.error(err.response.data);
        });
  }

  const handlesolve=(complaintid)=>
  {
    navigate(`/SolveComplaints/${complaintid}`);
  };

  return (
    <>
  
        <h1 style={{color:"Red",textAlign:"center"}}>View Complaints</h1>           
           <div className='table1'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Complaint id</th>
                <th>Crop Name</th>
                <th>Crop Type</th>
                <th>Soil Type</th>
                <th>Disease Details</th>
                <th>Crop Duration</th>
                <th>Precautions</th>
                <th>Symptoms</th>
                <th>Photo</th>    
            </tr>
            </thead>  
            <tbody>
            {
            complaintslist.map ((item,index)=>(
                <tr key={index}>
                        <td>{item.complaintid}</td>
                        <td>{item.cropname}</td>
                        <td>{item.croptype}</td>
                        <td>{item.soiltype}</td>
                        <td>{item.diseasedetails}</td>
                        <td>{item.durationcrop}</td>
                        <td>{item.precaution}</td>
                        <td>{item.symptoms}</td>
                        <td><img src={item.photo} alt="croppic" width="200px" height="200px"/></td>
                        <td><Button onClick={()=>handlesolve(item.complaintid)}>Solve</Button></td>
                    </tr>
                     ))}
             </tbody>          
        </table>
        </div>                

 </>
  )
}
