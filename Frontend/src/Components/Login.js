import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';



export default function Login() 
{
  const users=["Admin","Farmer"];
  const[password,setPassword]=useState('');
  const[usertype,setUsertype]=useState('');
  const navigate=useNavigate();
  const[emailid,setEmailid]=useState('');
  const[login,setLogin]=useState({});



function handleLogin()        /* Login check for admin and farmer */
{
    if(usertype==="")
        {
            toast.error("Please choose Usertype");
            return 0;
        }
        if(emailid==="")
            {
                toast.error("Please enter emailid");
                return 0;
            }
            if(password==="")
                {
                    toast.error("Please enter password");
                    return 0;
                }
    if(usertype==="Admin" || usertype==="admin")
    {
    axios
    .get(`http://localhost:8080/adminlogincheck/${emailid}/${password}`)
    .then((res)=>{
        setLogin(res.data);
        navigate("/Admindashboard");
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
    }
else if(usertype==="Farmer" || usertype==="farmer")
    {
    axios
    .get(`http://localhost:8080/farmerlogincheck/${emailid}/${password}`)
    .then((res)=>{
        setLogin(res.data);
        const userid=res.data.farmerid;
        sessionStorage.setItem('farmerid',userid);
        navigate("/Farmerdashboard");
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
}
}

function clearAll()
{
    setEmailid("");
    setPassword("");
    setUsertype("");
}

  return (
    <>
  <Navbar/>
        <h1 className='text-center' style={{color:"red",textAlign:"center"}}>Login Page</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTQ3AavV_NGhBJbv4m_fR9B88UZKPy6r7wYZG1kl3IjlVTGnrD_ecIeWnF-s36GV58V8&usqp=CAU" alt="loginbtn" width="100px" style={{marginLeft:"620px"}}/>
      
        <Card className='loginpage'>
      <Card.Body>
        <Card.Text>
        <Form>
        <label className='form-label'><h5>Select Usertype:</h5></label>
            <select value={usertype} className='form-select' onChange={(e)=>setUsertype(e.target.value)}>
                <option value={0}>--Select Options--</option>
                {
                    users.map((item,index)=>(
                        <option key={index}>{item}</option>
                    ))   
                }   
            </select><br></br>
      <Form.Group className="mb-3">
        <Form.Label><h5>Emailid:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder='@gmail.com'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Password:</h5></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*****'/>
      </Form.Group>
      </Form>
        </Card.Text>
        <div className='butons'>
        <Button variant="primary me-3" size="md" onClick={handleLogin}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>              
        </div>
      </Card.Body>
    </Card><br></br>
        </>
  );
}
