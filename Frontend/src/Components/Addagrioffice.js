import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Addagrioffice()
 {
    const[officename,setOfficename]=useState('');
    const[address,setAddress]=useState('');
    const[location,setLocation]=useState('');
    const[pincode,setPincode]=useState('');
    const[mobile,setMobile]=useState('');
    const[selectedcategory,setSelectedcategory]=useState('');
    const[agrilist,setagrilist]=useState([]); //List of agriculture office list
    const[categorylist,setCategorylist]=useState([]);  //Dropdown List of Category
    const[hideagrioffice,setHideagrioffice]=useState(false);   // Hide Agrioffice list

    useEffect(()=>{
        getallcategory(); //Drop down liat of Category list
    },[])


    function addagrioffice()        //Post Agriculture office
    {
        if(selectedcategory==="")
            {
                toast.error("Please Choose  category");
                return 0; 
            }
            if(officename==="")
                {
                    toast.error("Please enter officename");
                    return 0;
                }
                if(address==="")
                    {
                        toast.error("Please enter address");
                        return 0;
                    }
                    if(mobile==="")
                        {
                            toast.error("Please enter mobile");
                            return 0;
                        }
                        if(location==="")
                            {
                                toast.error("Please enter url of location");
                                return 0;
                            }
                            if(pincode==="")
                                {
                                    toast.error("Please enter pincode");
                                    return 0;
                                }
        const obj={selectedcategory,officename,address,mobile,location,pincode}
        axios
        .post(`http://localhost:8080/addagrioffice/${selectedcategory}`,obj)
        .then((res)=>{
            toast.success(res.data);
            setHideagrioffice(false);
            clearAll();
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }

    function getallagrioffice()         //Get all Agriculture office
    { 
        axios
        .get("http://localhost:8080/getallagrioffice")
        .then((res)=>{
            setagrilist(res.data);
            setHideagrioffice(true);
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }

    function  getallcategory()      //Dropdown list of Category list
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
        setAddress("");
        setLocation("");
        setMobile("");
        setOfficename("");
        setPincode("");
        setSelectedcategory("");
    }

  return (
    <>
    
        <h1 style={{color:"Red",textAlign:"center"}}>Add Agriculture office</h1> 
        <div className='agriofficeinfo'>
        <Form>
            <h5><label className='form-label'>Select Category:</label></h5>
            <select value={selectedcategory} className='form-select' onChange={(e)=>setSelectedcategory(e.target.value)}>
                <option value={0}>--Select Options--</option>
                {
                    categorylist.map((item,index)=>(
                        <option key={index} value={item.categoryid}>{item.categoryid}-{item.category}</option>
                    ))}
            </select>
      <Form.Group className="mb-3">
        <Form.Label><h5>Office Name:</h5></Form.Label>
        <Form.Control type="text" value={officename} onChange={(e)=>setOfficename(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Address:</h5></Form.Label>
        <Form.Control type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Mobile-no:</h5></Form.Label>
        <Form.Control type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Location:</h5></Form.Label>
        <Form.Control type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Pincode:</h5></Form.Label>
        <Form.Control type="text" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
      </Form.Group>
      </Form><br></br>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addagrioffice}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getallagrioffice}>
       Display
      </Button>
      </div>   <br></br>
      </div>  <br></br>

    
     { hideagrioffice && (
      <div className='agriofficetable'> 
        <table className='table table-striped'>
            <thead>
                <th>Office Name</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Pincode</th>
                <th>Category Name</th>
            </thead>
            <tbody>
                {
                    agrilist.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.officename}</td>
                            <td>{item.address}</td>
                            <td>{item.mobile}</td>
                            <td>{item.pincode}</td>
                            <td>{item.category2.category}</td>
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
