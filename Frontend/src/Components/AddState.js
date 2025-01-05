import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function AddState()
 {
    const[state,setState]=useState('');
    const[statelist,setStatelist]=useState([]); //Display list of states
    const[hidestate,setHidestate]=useState(false); //Hide state list
  

  function clearAll()
  {
    setState("");
  }

  function addstate()   /* Add State details */
  {
    if(state==="")
        {
            toast.error("Please enter state");
            return 0;
        }
    const obj={state};
    axios
    .post("http://localhost:8080/addstate",obj)
    .then((res)=>{
        toast.success(res.data);
        setHidestate(false);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function getallstate()   /* Get all State details */
  {
    axios
    .get("http://localhost:8080/getallstate")
    .then((res)=>{
        setStatelist(res.data);
        setHidestate(true);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  return (
    <>
   
       
        <h1 style={{color:"Red",marginLeft:"200px"}}>Add States</h1> 
        <div className='stateinfo'><br></br>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>State Name:</h5></Form.Label>
        <Form.Control type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
      </Form.Group>
      </Form><br></br>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addstate}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getallstate}>
       Display
      </Button>
      </div>   <br></br><br></br>
      </div>


      
      { hidestate && (           
      <div className='statetable'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>State id</th>
                <th>State Name</th>
            </tr>
            </thead>  
            <tbody>
             {
                statelist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.stateid}</td>
                        <td>{item.state}</td>
                    </tr>
                ))
             }
                </tbody>          
        </table>
        </div>            
        )}  
 </>
  )
}
