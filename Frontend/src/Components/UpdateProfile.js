import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function UpdateProfile() 
{
    const[farmername,setFarmername]=useState('');
    const[phoneno,setPhoneno]=useState('');
    const[emailid,setEmailid]=useState('');
    const[password,setPassword]=useState('');

    const frmrid=sessionStorage.getItem('farmerid');

    useEffect(()=>{
        getfarmer();
    })

  function clearAll()
  {
    setFarmername("");
    setEmailid("");
    setPassword("");
    setPhoneno("");
  }

  function getfarmer() /* Assign values for Update Operations */
  {
    axios
        .get(`http://localhost:8080/getfarmer/${frmrid}`)
        .then((res)=>{
            setFarmername(res.data.farmername);
            setPhoneno(res.data.phoneno);
            setEmailid(res.data.emailid);
            setPassword(res.data.password);
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
  }

  function updateprofile()        /* Update Farmer Profile details */
    {
        const obj={farmername,phoneno,emailid,password};
        axios
        .put(`http://localhost:8080/updateprofile/${frmrid}`,obj)
        .then((res)=>{
            toast.success(res.data);
            clearAll();
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }


  return (
    <>
    
           <h1 style={{color:"Red",marginLeft:"500px"}}>Update Profile</h1>
        <div className='registerpage'>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Farmer Name:</h5></Form.Label>
        <Form.Control type="text" value={farmername} onChange={(e)=>setFarmername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Phoneno:</h5></Form.Label>
        <Form.Control type="text" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Email-id:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Password:</h5></Form.Label>
        <Form.Control type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      </Form>

      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={updateprofile}>
       Update
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      </div>
        </div>
           </>
  )
}
