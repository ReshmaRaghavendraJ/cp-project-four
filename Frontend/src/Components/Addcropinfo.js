import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Addcropinfo()
 {
    const[cropname,setCropname]=useState('');
    const[soiltype,setSoiltype]=useState('');
    const[seedcategory,setSeedcategory]=useState('');
    const[costofcult,setCostofcult]=useState('');
    const[waterirrigation,setWaterirrigation]=useState('');
    const[harvest,setHarvest]=useState('');
    const[dificiencysymptoms,setDificiencysymptoms]=useState('');
    const[categorylist,setCategorylist]=useState([]);  //Dropdown list of category
    const[selectedcategory,setSelectedcategory]=useState('');
    const[cropinfolist,setCropinfolist]=useState([]); //List of cropinfo details
    const[photos,setPhotos]=useState('');
    const[hidecropinfo,setHidecropinfo]=useState(false);  //Hide Crop info list

  
    useEffect(()=>{
        getallcategory(); //Dropdown list 
    })
    
    function addcropinfo()        /* Add Crop information details */
    {
        if(selectedcategory==="")
            {
                toast.error("Please Choose selectedcategory");
                return 0;
            }
            if(cropname==="")
                {
                    toast.error("Please enter cropname");
                    return 0;
                }
                if(soiltype==="")
                    {
                        toast.error("Please enter soiltype");
                        return 0;
                    }
                    if(seedcategory==="")
                        {
                            toast.error("Please enter seedcategory");
                            return 0;
                        }
                        if(waterirrigation==="")
                            {
                                toast.error("Please enter waterirrigation");
                                return 0;
                            }
                            if(harvest==="")
                                {
                                    toast.error("Please enter harvest");
                                    return 0;
                                }
                                if(dificiencysymptoms==="")
                                    {
                                        toast.error("Please enter dificiency symptoms");
                                        return 0;
                                        }
                                          if(costofcult==="")
                                             {
                                              toast.error("Please enter cost of cult");
                                                 return 0;
                                                  }
                                                if(photos==="")
                                                   {
                                                      toast.error("Please upload photos");
                                                     return 0;
                                                     }
        const obj={selectedcategory,cropname,soiltype,seedcategory,costofcult,waterirrigation,harvest,dificiencysymptoms,photos};
        axios
        .post(`http://localhost:8080/addcropinfo/${selectedcategory}`,obj)
        .then((res)=>{
            toast.success(res.data);
            setHidecropinfo(false);
            clearAll();
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }

    function getallcategory()   /* Dropdown of  Category list */
    {
        axios
        .get("http://localhost:8080/getallcategory")
        .then((res)=>{
            setCategorylist(res.data);
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }

    function clearAll()
    {
        setCostofcult("");
        setCropname("");
        setDificiencysymptoms("");
        setHarvest("");
        setSeedcategory("");
        setSoiltype("");
        setWaterirrigation("");
        setSelectedcategory("");
        setPhotos("");
    }

    function getallcropinfo()   /* Display All Cropinfo list */
  {
      axios
      .get("http://localhost:8080/getallcropinfo")
      .then((res)=>{
          setCropinfolist(res.data);
          setHidecropinfo(true);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }

  return (
    <>

        <h1 style={{color:"Red",marginLeft:"500px"}}>Add Crop Information</h1>
        <div className='registerpage'>
            <label className='form-label'>Select Category:</label>
            <select value={selectedcategory} className='form-select' onChange={(e)=>setSelectedcategory(e.target.value)}>
                <option value={0}>--Select options--</option>
                {
                    categorylist.map((item)=>(
                        <option key={item.categoryid} value={item.categoryid}>{item.categoryid}-{item.category}</option>
                    ))
                }
            </select>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Crop Name:</h5></Form.Label>
        <Form.Control type="text" value={cropname} onChange={(e)=>setCropname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Soil Type:</h5></Form.Label>
        <Form.Control type="text" value={soiltype} onChange={(e)=>setSoiltype(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Seed Category:</h5></Form.Label>
        <Form.Control type="text" value={seedcategory} onChange={(e)=>setSeedcategory(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Water Irrigation:</h5></Form.Label>
        <Form.Control type="text" value={waterirrigation} onChange={(e)=>setWaterirrigation(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Harvest:</h5></Form.Label>
        <Form.Control type="text" value={harvest} onChange={(e)=>setHarvest(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Deficiency Symptoms:</h5></Form.Label>
        <Form.Control type="text" value={dificiencysymptoms} onChange={(e)=>setDificiencysymptoms(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Cost of Cultivation:</h5></Form.Label>
        <Form.Control type="text" value={costofcult} onChange={(e)=>setCostofcult(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Upload Photo:</h5></Form.Label>
        <Form.Control type="text" value={photos} onChange={(e)=>setPhotos(e.target.value)}/>
      </Form.Group>
      </Form><br></br>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addcropinfo}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getallcropinfo}>
       Display
      </Button>
      </div>   <br></br> 
      </div>

      
    { hidecropinfo && (
      <div className='table1'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Crop id</th>
                <th>Crop Name</th>
                <th>Soil type</th>
                <th>Seedcategory</th>
                <th>Water Irrigation</th>
                <th>Harvest</th>
                <th>Deficiency Symptoms</th>
                <th>Cost of Cultivation</th>
            </tr>
            </thead>  
            <tbody>
             {
                cropinfolist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.cropinfoid}</td>
                        <td>{item.cropname}</td>
                        <td>{item.soiltype}</td>
                        <td>{item.seedcategory}</td>
                        <td>{item.waterirrigation}</td>  
                        <td>{item.harvest}</td>
                        <td>{item.dificiencysymptoms}</td>
                        <td>{item.costofcult}</td>
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
