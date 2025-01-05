import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Viewuserdetails() 
{
    const[farmerlist,setFarmerlist]=useState([]);  //Display list of farmers
  

  useEffect(()=>{
    getallfarmerdetails();
  },[])

  function getallfarmerdetails()
  {
    axios
    .get("http://localhost:8080/getallfarmerdetails")
        .then((res) => {
            setFarmerlist(res.data);
        })
        .catch((err) => {
            toast.error(err.response.data);
        });
  }

  return (
    <>

        <h1 style={{color:"Red",marginLeft:"500px"}}>View Farmers</h1>           
           <div className='tabless'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Farmer id</th>
                <th>Farmer Name</th>
                <th>Phoneno</th>
                <th>Emailid</th>
            </tr>
            </thead>  
            <tbody>
            {
            farmerlist.map ((item,index)=>(
                <tr key={index}>
                        <td>{item.farmerid}</td>
                        <td>{item.farmername}</td>
                        <td>{item.phoneno}</td>
                        <td>{item.emailid}</td>
                    </tr>
                     ))}
             </tbody>          
        </table>
        </div>  <br></br>             

 </>
  )
}
