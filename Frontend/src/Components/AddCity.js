import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function AddCity()
 {
    const[city,setCity]=useState('');
    const[citylist,setCitylist]=useState([]); //Display list of cities
    const[selectedstate,setSelectedstate]=useState('');
    const[statelist,setStatelist]=useState([]);  //Dropdown list of statelist
    const[hidecity,setHidecity]=useState(false);  //Hide city list
  

  useEffect(()=>{
    getallstate();
  })

  function getallstate()   /* Dropdown list of State details */
  {
    axios
    .get("http://localhost:8080/getallstate")
    .then((res)=>{
        setStatelist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function clearAll()
  {
    setCity("");
    setSelectedstate("");
  }

  function addcity()   /* Add City details */
  {
    if(selectedstate==="")
        {
            toast.error("Please Choose State");
            return 0;
        }
        if(city==="")
            {
                toast.error("Please enter city");
                return 0;
            }
    const obj={city};
    axios
    .post(`http://localhost:8080/addcity/${selectedstate}`,obj)
    .then((res)=>{
        toast.success(res.data);
        setHidecity(false);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function getallcity()   /* Get all City details */
  {
    axios
    .get("http://localhost:8080/getallcity")
    .then((res)=>{
        setCitylist(res.data);
        setHidecity(true);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }
  return(
    <>
           <h1 style={{color:"Red",marginLeft:"200px"}}>Add City</h1> 
        <div className='cityinfo'>
           <label className='form-label'><h5>Select State:</h5></label>
            <select className='form-select' value={selectedstate} onChange={(e)=>setSelectedstate(e.target.value)}>
                <option value={0}>--Choose Options--</option>
                {
                    statelist.map((item,index)=>(
                        <option key={index} value={item.stateid}>{item.stateid}-{item.state}</option>
                    ))
                }
            </select><br></br>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>City Name:</h5></Form.Label>
        <Form.Control type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
      </Form.Group>
      </Form>  <br></br>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addcity}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getallcity}>
       Display
      </Button>
      </div>   <br></br><br></br>
   
      </div>


      
       {hidecity && (      
      <div className='citytable'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>City id</th>
                <th>City Name</th>
                <th>Satte Name</th>
            </tr>
            </thead>  
            <tbody>
             {
                citylist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.cityid}</td>
                        <td>{item.city}</td>
                        <td>{item.state1.state}</td>
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
