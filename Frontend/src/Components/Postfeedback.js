import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Postfeedback() 
{
    const frmid=sessionStorage.getItem('farmerid');
    const[feedback,setFeedback]=useState('');
    

    function clearAll()
    {
        setFeedback("");
    }

    function addfeedback()
    {
        if(feedback==="")
            {
                toast.error("Please enter feedback");
                return 0;
            }
        const obj={feedback};
        axios
        .post(`http://localhost:8080/addfeedback/${frmid}`,obj)
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

           <h1 style={{color:"Red",marginLeft:"550px"}}>Post Feedback</h1><br></br>
        <Card className='feedbackinfo'>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Enter Feedback:</h5></Form.Label>
        <Form.Control type="text" value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
      </Form.Group>
      </Form>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addfeedback}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      </div>
        </Card><br></br>
           </>
  )
}
