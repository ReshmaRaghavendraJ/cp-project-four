import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Findcropinfo() 
{
    const[cropdetails,setCropedetails]=useState({});
    const { cropinfoid } = useParams();

    useEffect(() => {
        getcropdetails(cropinfoid);
    }, [cropinfoid]);
  
function getcropdetails(cropinfoid)  /* Get particular cropdetails */
{
    axios.get(`http://localhost:8080/getcropdetails/${cropinfoid}`)
    .then((res) => {
        setCropedetails(res.data);
    })
    .catch((err) => {
        toast.error(err.response.data);
    });
}

  return (
    <>
           <div className='complaintstatustable'>
            {
                cropdetails.cropinfoid ? (
                        <Card style={{ width: '650px', margin: '10px',height:"550px"}}>
                        <Card.Img variant="top" src={cropdetails.photos} style={{width:"300px",height:"299px",marginLeft:"30px",marginTop:"50px",border:"1px solid lightgray"}}/><br></br>
                        <Card.Title><h3 style={{marginLeft:"100px",color:"Red"}}> {cropdetails.cropname}</h3></Card.Title>
                        <Card.Body className='cardbody'>
                          <Card.Text><h5>Soil Type</h5>{cropdetails.soiltype}</Card.Text>
                          <Card.Text><h5>Seed Category</h5>{cropdetails.seedcategory}</Card.Text>
                          <Card.Text><h5>Water Irrigation</h5>{cropdetails.waterirrigation}</Card.Text>
                          <Card.Text><h5>Harvest</h5>{cropdetails.harvest}</Card.Text>
                          <Card.Text><h5>Dificiency Symptoms</h5>{cropdetails.dificiencysymptoms}</Card.Text>
                          <Card.Text><h5>Cost of Cultivation</h5>{cropdetails.costofcult}</Card.Text>
                          <Link className='btn btn-warning' to="/Farmerdashboard">Back</Link>
                        </Card.Body>
                        </Card>
           ): (
            <p>No crop details found.</p>
        )}
      
            </div><br></br>    
                     
         </>
  )
}
