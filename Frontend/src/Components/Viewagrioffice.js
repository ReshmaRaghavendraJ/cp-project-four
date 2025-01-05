import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Viewagrioffice() 
{
    const[selectedcategory,setSelectedcategory]=useState('');
    const[categorylist,setCategorylist]=useState([]);  // Dropdown list of category list
    const[agriofficelist,setAgriofficelist]=useState([]); //Display Agriculture office details


    useEffect(()=>{
        getallcategory();
    },[])

    useEffect(() => {
        if (selectedcategory) {
            getagrioffoncategory(selectedcategory);
        }
    }, [selectedcategory]);

    function getallcategory()  /* Dropdown  list of category */
  {
    axios
    .get("http://localhost:8080/getallcategory")
    .then((res)=>{
        setCategorylist(res.data);
        // getagrioffoncategory();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function getagrioffoncategory(categoryid)
  {
    if(categoryid==="")
        {
            toast.error("Please choose category");
            return 0;
        }
    axios
    .get(`http://localhost:8080/getagrioffoncategory/${categoryid}`)
    .then((res)=>{
        setAgriofficelist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  return (
    <> 
          
           <h1 style={{color:"Red",marginLeft:"500px"}}>View Agriculture Office</h1>
        <div className='agrioffinfo'>
            <label className='form-label'>Select Category:</label>
            <select value={selectedcategory} className='form-select' onChange={(e)=>setSelectedcategory(e.target.value)}>
                <option value={0}>--Select options--</option>
                {
                    categorylist.map((item)=>(
                        <option key={item.categoryid} value={item.categoryid}>{item.categoryid}-{item.category}</option>
                    ))
                }
            </select>
            </div><br></br>


            <div className='complaintstatustable'>
            {
                    agriofficelist.map((item,index)=>(
                        <Card key={index} style={{ width: '400px', margin: '10px',height:"350px",marginLeft:"430px"}}>
                             <Card.Body className='agriofficecard'>
                        <Card.Text><h6>Agriculture Office Name:</h6>{item.officename}</Card.Text>
                          <Card.Text><h6>Address: </h6>  {item.address}</Card.Text>
                          <Card.Text><h6>Mobile no:</h6>  {item.mobile}</Card.Text>
                          <Card.Text><h6>Pincode: </h6>  {item.pincode}</Card.Text>
                          <Card.Text><h6>Map:</h6> <a href={item.location} target="_blank"  rel="noopener noreferrer" style={{ marginLeft: "50px",marginTop:"-100px" }}>
                          <img className="mapimg" src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=" alt="map" width="50px" height="50px"/> 
                          </a>
                          </Card.Text>
                        </Card.Body>
                        </Card>
           )) 
           }
            </div><br></br>                             
           </>
  )
}
