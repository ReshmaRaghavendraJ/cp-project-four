import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { format,parseISO  } from 'date-fns';   //To display 'datetime-local' in required format
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function AddCommodity() 
{
    const[selectedcity,setSelectedcity]=useState('');
    const[commodity,setCommodity]=useState('');
    const[price,setPrice]=useState('');
    const[commoditylist,setCommoditylist]=useState([]);   //display list of commodity details
    const[citylist,setCitylist]=useState([]);    //Dropdown list of cities
    const[hidecommodity,setHidecommodity]=useState(false); //Hide commodity list
    const[commoditydate,setCommoditydate]=useState('');
    const[commid,setCommid]=useState('');   //For updating new value for commid 
    const [isEditing, setIsEditing] = useState(false); // New state for edit mode


useEffect(()=>{
    getallcity();
},[])

  function addcommodity()   //Add Commodity details based on city
  {
    if(selectedcity==="")
        {
            toast.error("Please choose city");
            return 0;
        }
        if(commoditydate==="")
            {
                toast.error("Please select commoditydate");
                return 0;
            }
        if(commodity==="")
            {
                toast.error("Please enter commodity");
                return 0;
            }
            if(price==="")
                {
                    toast.error("Please enter price");
                    return 0;
                }
    const obj = { selectedcity,commoditydate , commodity,price};
    axios
    .post(`http://localhost:8080/addcommodity/${selectedcity}`,obj)
    .then((res)=>{
        toast.success(res.data);
        setHidecommodity(false);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  function getallcommodity()   /* Display list of Commodity details */
  {
    axios
    .get("http://localhost:8080/getallcommodity")
    .then((res)=>{
        setCommoditylist(res.data);
        setHidecommodity(true);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  function getallcity()   /* Dropdown list of all Cities */
  {
    axios
    .get("http://localhost:8080/getallcity")
    .then((res)=>{
        setCitylist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  function clearAll()
  {
    setSelectedcity("");
    setCommodity("");
    setPrice("");
    setCommoditydate("");
    setIsEditing(false); // Reset edit mode
  }

  const handleCommodityDateChange = (date) => {
    const formattedDate = format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss");
    setCommoditydate(formattedDate);
};

function updatecommodity()   /* Update Commodity details */
{
    if(commodity==="")
        {
            toast.error("Please enter commodity");
            return 0;
        }
        if(commoditydate==="")
            {
                toast.error("Please select commodity date");
                return 0;
            }
            if(price==="")
                {
                    toast.error("Please enter price");
                    return 0;
                }
    const obj={commodity,commoditydate,price};
  axios
    .put(`http://localhost:8080/updatecommodity/${commid}`,obj)
    .then((res)=>{
        toast.success(res.data);
        getallcommodity();
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
}



const Assignvalues=(id)=>{
            setCommodity(id.commodity);
            setPrice(id.price);
            setCommoditydate(id.commoditydate);
            setCommid(id.commodityid);
            setIsEditing(true); // set edit mode
    };


  return (
    <>
  
           <h1 style={{color:"Red",textAlign:"center"}}>Add Commodity Details</h1> 
        <div className='commodityinfo'>
           <label className='form-label'><h5>Select City:</h5></label>
            <select className='form-select' value={selectedcity} onChange={(e)=>setSelectedcity(e.target.value)}>
                <option value={0}>--Choose Options--</option>
                {
                    citylist.map((item,index)=>(
                        <option key={index} value={item.cityid}>{item.cityid}-{item.city}</option>
                    ))
                }
            </select><br></br>
            <label className='form-label'><h5>Select Commodity Date:</h5></label>
            <input className='form-control'  type="datetime-local"  value={commoditydate}   onChange={(e) => handleCommodityDateChange(e.target.value)}/>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>Commodity:</h5></Form.Label>
        <Form.Control type="text" value={commodity} onChange={(e)=>setCommodity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Price:</h5></Form.Label>
        <Form.Control type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>
      </Form> <br></br>
      <div className='butons'>
      <Button variant={isEditing ? "warning me-3" : "primary me-3"} size="md" onClick={isEditing ? updatecommodity : addcommodity}>
                        {isEditing ? "Update" : "Submit"}
    </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getallcommodity}>
       Display
      </Button>
      {/* <Button variant="warning me-3" size="md" onClick={updatecommodity}>
       Update
      </Button> */}
      </div>   <br></br><br></br>    
      </div><br></br><br></br> 


     
    { hidecommodity && (
      <div className='commoditytable'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Commodity id</th>
                <th>Commodity Name</th>
                <th>Price</th>
                <th>State Name</th>
                <th>City Name</th>
                <th>Commodity Date</th>
            </tr>
            </thead>  
            <tbody>
             {
                commoditylist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.commodityid}</td>
                        <td>{item.commodity}</td>
                        <td>{item.price}</td>
                        <td>{item.city2.state1.state}</td>
                        <td>{item.city2.city}</td>
                        <td>{format(parseISO(item.commoditydate), "yyyy-MM-dd hh:mm a")}</td>
                        <td style={{color:"red"}}><FontAwesomeIcon icon={faPen} onClick={()=>Assignvalues(item)}/></td>
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