import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Viewcomplaintstatus()
 {
    const[compstatuslist,setCompstatuslist]=useState([]);  //Display list of complaint status
    const frmrid=sessionStorage.getItem('farmerid');
  

useEffect(()=>{
    getcompstatus();
})

  function getcompstatus()
  {
    axios
    .get(`http://localhost:8080/getcompstatus/${frmrid}`)
        .then((res) => {
            setCompstatuslist(res.data);
        })
        .catch((err) => {
            toast.error(err.response.data);
        });
  }

  return (
    <>
        
           <h1 style={{color:"Red",marginLeft:"500px"}}>View Complaint Status</h1>
           <div className='complaintstatustable'>
            {
                    compstatuslist.map((item,index)=>(
                        <Card key={index} style={{ width: '1000px', margin: '10px',height:"500px"}}>
                        <Card.Img variant="top" src={item.photo} style={{width:"300px",height:"299px",marginLeft:"30px",marginTop:"50px",border:"1px solid lightgray"}}/><br></br>
                        <Card.Title><h3 style={{marginLeft:"100px",color:"Red"}}> {item.cropname}</h3></Card.Title>
                        <Card.Body className='cardbody'>
                          <Card.Text><h5>Disease Details</h5>{item.diseasedetails}</Card.Text>
                          <Card.Text><h5>Medicine</h5>{item.medicine}</Card.Text>
                          <Card.Text><h5>Solution</h5>{item.solution}</Card.Text>
                          <Card.Text><h5>Reason</h5>{item.reason}</Card.Text>
                          <Card.Text><h5>Status</h5>{item.status}</Card.Text>
                        </Card.Body>
                        </Card>
           )) 
           }
            </div><br></br>        
    </>
  )
}
