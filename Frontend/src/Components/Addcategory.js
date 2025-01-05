import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Addcategory()
 {
    const[category,setCategory]=useState('');
    const[pic,setPic]=useState('');
    const[categorylist,setCategorylist]=useState([]);
    const[hidecategory,setHidecategory]=useState(false);   //Hide Category list
  

  function addcategory()     /* Add Category details */
  {
    if(category==="")
        {
            toast.error("Please enter category");
            return 0;
        }
        if(pic==="")
            {
                toast.error("Please upload pic");
                return 0;
            }
      const obj={category,pic};
      axios
      .post("http://localhost:8080/addcategory",obj)
      .then((res)=>{
          toast.success(res.data);
          setHidecategory(false);
          clearAll();
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }

  function clearAll()
  {
    setCategory("");
    setPic("");
  }

  function getallcategory()   /* Display All Category list */
  {
      axios
      .get("http://localhost:8080/getallcategory")
      .then((res)=>{
          setCategorylist(res.data);
          setHidecategory(true);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }

  return (
    <>
    
        <h1 style={{color:"Red",textAlign:"center"}}>Addcategory</h1>
        <div className='categoryinfo'>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Category Name:</h5></Form.Label>
        <Form.Control type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>please upload category of crop:</h5></Form.Label>
        <Form.Control type="text" value={pic} onChange={(e)=>setPic(e.target.value)}/>
      </Form.Group>
      </Form>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addcategory}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getallcategory}>
       Display
      </Button>
      </div>   <br></br> 
        </div><br></br>
       

    { hidecategory && (
      <div className='categorytable'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Categoryid</th>
                <th>Category</th>
                <th>Photo</th>
            </tr>
            </thead>  
            <tbody>
             {
                categorylist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.categoryid}</td>
                        <td>{item.category}</td>
                        <td><img src={item.pic} alt="crops" width="170px" style={{borderRadius:"50%"}}/></td>
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
