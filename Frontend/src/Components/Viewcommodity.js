import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { format,parseISO  } from 'date-fns';   //To display 'datetime-local' in required format
import { Card } from 'react-bootstrap';



export default function Viewcommodity() 
{
    const location = useLocation(); // Get current location
    const[commoditylist,setCommoditylist]=useState([]);  //Display commodity details
    const[citylist,setCitylist]=useState([]); //Dropdown list of cities
    const[selectedcity,setSelectedcity]=useState('');
  
    useEffect(() => {
      getallcity();  // Fetch commodities when a city is selected
  }, [location]);


  useEffect(() => {
    if (selectedcity) {
        getcommodity(); // Fetch commodities when a city is selected
    }
}, [selectedcity]);

  function getcommodity()    //Display Commodity Details
  {
    if(selectedcity==="")
        {
            toast.error("Please choose city");
            return 0;
        }
    axios
      .get(`http://localhost:8080/getcommodity/${selectedcity}`)
      .then((res)=>{
          setCommoditylist(res.data);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }


  function getallcity() //Dropdown list of City
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



  return (
    <>

           <h1 style={{color:"Red",marginLeft:"400px"}}>View Commodity Details</h1>
           <div className='viewcomminfo'>
            <label className='form-label'>Select City:</label>
            <select className="form-select" value={selectedcity} onChange={(e)=>setSelectedcity(e.target.value)}>
                <option key={0}>--Choose Options--</option>
                {
                    citylist.map((item,index)=>(
                        <option key={index} value={item.cityid}>{item.cityid}-{item.city}</option>
                    ))
                }
            </select>
            </div>

         <Card className='viewcommtable'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Commodity id</th>
                <th>Commodity Name</th>
                <th>Price</th>
                <th>city Name</th>
                <th>State Name</th>
                <th>Commodity Date</th>
            </tr>
            </thead>  
            <tbody>
             {
                commoditylist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.commodityid}</td>
                        <td>{item.commodity}</td>
                        <td><img src="https://i.pinimg.com/736x/38/cd/39/38cd3989b25d6f19de68028266273ac4.jpg" alt="rs" width="30px"/>{item.price}</td>
                        <td>{item.city2?.city}</td>
                        <td>{item.city2.state1?.state}</td>
                        <td>{format(parseISO(item.commoditydate), "yyyy-MM-dd hh:mm a")}</td>
                    </tr>
                ))
             }
                </tbody>          
        </table>
        </Card>  <br></br>                 
    </>
  )
}
