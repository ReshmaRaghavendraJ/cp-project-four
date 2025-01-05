import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';

export default function Register() 
{
  const[farmername,setFarmername]=useState('');
  const[password,setPassword]=useState('');
  const[phoneno,setPhoneno]=useState('');
  const[emailid,setEmailid]=useState('');


function farmerregister()    /* Farmer or User Register */
{
    if(farmername==="")
    {
        toast.error("Please enter farmer name");
        return 0;
    }
    if(emailid==="")
        {
            toast.error("Please enter email id");
            return 0;
        }   
        if(password==="")
            {
                toast.error("Please enter password");
                return 0;
            }   
            if(phoneno==="")
                {
                    toast.error("Please enter phoneno");
                    return 0;
                }   
    const obj={farmername,emailid,password,phoneno};
    axios
    .post("http://localhost:8080/farmerregister",obj)
    .then((res)=>{
        toast.success(res.data);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
}

function clearAll()
{
    setEmailid("");
    setFarmername("");
    setPassword("");
    setPhoneno("");
}

  return (
    <>
  <Navbar/>

     <Card className='registerpage'>
      <Card.Header><h1 style={{color:"Red",marginLeft:"500px"}}>Farmer Registration</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Farmer Name:</h5></Form.Label>
        <Form.Control type="text" value={farmername} onChange={(e)=>setFarmername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Email-id:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder='@gmail.com'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Password:</h5></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*****'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Phone-no:</h5></Form.Label>
        <Form.Control type="text" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} placeholder='+91'/>
      </Form.Group><br></br>
      </Form>
        </Card.Text>
        <div className='btnss'>
      <Button variant="primary me-3" size="md" onClick={farmerregister}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      </div>
      </Card.Body>
    </Card>
        </>
  )
}
