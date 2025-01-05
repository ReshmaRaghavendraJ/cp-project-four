import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Searchbycategory()
 {
    const[categorylist,setcategorylist]=useState([]);  //display list of Category
    const[selectedcategory,setSelectedcategory]=useState('');
    const[croplist,setCroplist]=useState([]);
    const navigate=useNavigate();
  

  useEffect(()=>{
    getallcategory(); 
  },[])

  function getallcategory()  /* display list of category */
  {
    axios
    .get("http://localhost:8080/getallcategory")
    .then((res)=>{
        setcategorylist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function getallcropinfooncategory(categoryid)    /* display all crop info pics */
  {
    if(categoryid==="")
        {
            toast.error("Please choose category");
            return 0;
        }
    axios
    .get(`http://localhost:8080/getallcropinfooncategory/${categoryid}`)
    .then((res)=>{
        setCroplist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  const handleCategoryChange = (e) => {
    const categoryid = e.target.value;
        setSelectedcategory(categoryid);
        if (categoryid !== '0') {
            getallcropinfooncategory(categoryid);
        } else {
            setCroplist([]); // Clear crop list if no category is selected
        }
};

const handlecropinfo=(cropinfoid)=>{
    navigate(`/Findcropinfo/${cropinfoid}`);
};

  return (
    <>
           <h1 style={{color:"Red",marginLeft:"500px"}}>Search By Category</h1><br></br>
        <div className='searchinfo'>
            <label className='form-label'>Select Category:</label>
            <select value={selectedcategory} className='form-select' onChange={handleCategoryChange}>
                <option value={0}>--Select options--</option>
                {
                    categorylist.map((item)=>(
                        <option key={item.categoryid} value={item.categoryid}>{item.categoryid}-{item.category}</option>
                    ))
                }
            </select>
            </div>

            <div className='card-container'>
                {croplist.map((item) => (
                    <Card key={item.cropname} className='crop-card'>
                        <Card.Img variant="top" src={item.photos} alt={item.cropname} />
                        <Card.Body>
                            <Card.Title style={{ color: "orangered",marginLeft:"80px" }}>{item.cropname}</Card.Title>
                            <Button variant="success" className='btns' onClick={()=>handlecropinfo(item.cropinfoid)}>View crop info</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
           </>
  )
}
