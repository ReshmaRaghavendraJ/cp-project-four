import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function SolveComplaints()
 {
    const[medicine,setMedicine]=useState('');
    const[status,setStatus]=useState('');
    const[solution,setSolution]=useState('');
    const[reason,setReason]=useState('');
    const { complaintid } = useParams();
  


  function clearAll()
  {
    setStatus("");
    setReason("");
    setSolution("");
    setMedicine("");
  }

  function Updatesolution()     /* Update Complaints Successfully */
  {
    if(status==="")
      {
          toast.error("Please enter status");
          return 0;
      }
      if(reason==="")
        {
            toast.error("Please enter reason");
            return 0;
        }
        if(medicine==="")
          {
              toast.error("Please enter medicine");
              return 0;
          }
          if(solution==="")
            {
                toast.error("Please enter solution");
                return 0;
            }
    const obj={status,reason,medicine,solution};
    axios
    .put(`http://localhost:8080/Updatesolution/${complaintid}`,obj)
        .then((res) => {
            toast.success(res.data);
            clearAll();
        })
        .catch((err) => {
            toast.error(err.response.data);
        });
  }

  return (
    <>
           <h1 style={{color:"Red",marginLeft:"500px"}}>Solve Complaints</h1>
        <div className='registerpage'>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Status:</h5></Form.Label>
        <Form.Control type="text" value={status} onChange={(e)=>setStatus(e.target.value)}/>
      </Form.Group>  
      <Form.Group className="mb-3">
        <Form.Label><h5>Reason:</h5></Form.Label>
        <Form.Control type="text" value={reason} onChange={(e)=>setReason(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Medicine:</h5></Form.Label>
        <Form.Control type="text" value={medicine} onChange={(e)=>setMedicine(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Solution:</h5></Form.Label>
        <Form.Control type="text" value={solution} onChange={(e)=>setSolution(e.target.value)}/>
      </Form.Group>
      </Form> <br></br>
       <div className='butons'>
      <Button variant="success me-3" size="md" onClick={Updatesolution}>
       Update
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Link to="/Admindashboard" className="btn btn-primary me-3" size="md" >
       Back
      </Link>
      </div><br></br>             
        </div>

    </>
  )
}
