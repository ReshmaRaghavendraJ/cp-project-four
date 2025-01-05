import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Postcomplaints() 
{
    const[cropname,setCropname]=useState('');
    const[croptype,setCroptype]=useState('');
    const[diseasedetails,setDiseasedetails]=useState('');
    const[durationcrop,setDurationcrop]=useState('');
    const[photo,setPhoto]=useState('');
    const[precaution,setPrecaution]=useState('');
    const[soiltype,setSoiltype]=useState('');
    const[symptoms,setSymptoms]=useState('');
    const[complaintslist,setcomplaintslist]=useState([]); // display list of posted complaints
    const[hidecomplaints,setHidecomplaints]=useState(false); //Hide Complaints list

    const frmid=sessionStorage.getItem('farmerid');
  

  function addcomplaints()   /* Add Complaints by particular farmer */
  {
    if(cropname==="")
        {
            toast.error("Please enter crop name");
            return 0;
        }
        if(croptype==="")
            {
                toast.error("Please enter crop type");
                return 0;
            }
            if(diseasedetails==="")
                {
                    toast.error("Please enter disease details");
                    return 0;
                }
                if(durationcrop==="")
                    {
                        toast.error("Please enter duration crop");
                        return 0;
                    }
                    if(photo==="")
                        {
                            toast.error("Please uploat photo");
                            return 0;
                        }
                        if(precaution==="")
                            {
                                toast.error("Please enter precaution");
                                return 0;
                            }
                            if(soiltype==="")
                                {
                                    toast.error("Please enter soil type");
                                    return 0;
                                }
                                if(symptoms==="")
                                    {
                                        toast.error("Please enter symptoms");
                                        return 0;
                                    }
    const obj={cropname,croptype,diseasedetails,durationcrop,photo,precaution,soiltype,symptoms};
        axios
        .post(`http://localhost:8080/addcomplaints/${frmid}`,obj)
        .then((res)=>{
            toast.success(res.data);
            setHidecomplaints(false);
            clearAll();
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
  }

  function clearAll()
  {
    setCropname("");
    setCroptype("");
    setDiseasedetails("");
    setDurationcrop("");
    setPhoto("");
    setPrecaution("");
    setSoiltype("");
    setSymptoms("");
  }

  function getcomplaintsdetails()      /* Display particular farmer's posted complaints details */
  {
    axios
      .get(`http://localhost:8080/getcomplaintsdetails/${frmid}`)
      .then((res)=>{
          setcomplaintslist(res.data);
          setHidecomplaints(true);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }

  return (
    <>
    
        <h1 style={{color:"Red",marginLeft:"500px"}}>Add Complaints</h1>
        <div className='registerpage'>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Crop Name:</h5></Form.Label>
        <Form.Control type="text" value={cropname} onChange={(e)=>setCropname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Crop Type:</h5></Form.Label>
        <Form.Control type="text" value={croptype} onChange={(e)=>setCroptype(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Disease Details:</h5></Form.Label>
        <Form.Control type="text" value={diseasedetails} onChange={(e)=>setDiseasedetails(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Crop Duration:</h5></Form.Label>
        <Form.Control type="text" value={durationcrop} onChange={(e)=>setDurationcrop(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Photo:</h5></Form.Label>
        <Form.Control type="text" value={photo} onChange={(e)=>setPhoto(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Crop Precautions:</h5></Form.Label>
        <Form.Control type="text" value={precaution} onChange={(e)=>setPrecaution(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Soil Type:</h5></Form.Label>
        <Form.Control type="text" value={soiltype} onChange={(e)=>setSoiltype(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Symptoms:</h5></Form.Label>
        <Form.Control type="text" value={symptoms} onChange={(e)=>setSymptoms(e.target.value)}/>
      </Form.Group>
      </Form><br></br>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addcomplaints}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getcomplaintsdetails}>
       Display
      </Button>
      </div>   <br></br> 
        </div>

        
    { hidecomplaints && (
      <div className='table1'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Crop Name</th>
                <th>Crop Type</th>
                <th>Diseasedetails</th>
                <th>Durationcrop</th>
                <th>Photo</th>
                <th>Precaution</th>
                <th>Soil Type</th>
                <th>Symptoms</th>
            </tr>
            </thead>  
            <tbody>
             {
                complaintslist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.cropname}</td>
                        <td>{item.croptype}</td>
                        <td>{item.diseasedetails}</td>
                        <td>{item.durationcrop}</td>
                        <td><img src={item.photo} className='tdimg' alt="picc"/></td>
                        <td>{item.precaution}</td>
                        <td>{item.soiltype}</td>
                        <td>{item.symptoms}</td>
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
