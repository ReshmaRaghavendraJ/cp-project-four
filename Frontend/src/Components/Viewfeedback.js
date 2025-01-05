import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Viewfeedback()
 {
    const[feedbacklist,setFeedbacklist]=useState([]); //Display list of Feedback

    useEffect(()=>{
        getallfeedback();
    },[])

    function getallfeedback()   /* Display list of Feedback */
    {
        axios
        .get("http://localhost:8080/getallfeedback")
        .then((res) => {
            setFeedbacklist(res.data);
        })
        .catch((err) => {
            toast.error(err.response.data);
        });
    }

  return (
    <>

           <h1 style={{color:"Red",textAlign:"center"}}>View Feedback</h1>           
           <div className='tabless'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>Feedback id</th>
                <th>Feedback</th>
                <th>Farmerid</th>
            </tr>
            </thead>  
            <tbody>
            {
            feedbacklist.map ((item,index)=>(
                <tr key={index}>
                        <td>{item.feedbackid}</td>
                        <td>{item.feedback}</td>
                        <td>{item.farmer1.farmerid}</td>
                    </tr>
                     ))}
             </tbody>          
        </table>
        </div>    <br></br>

        </>   
  )
}
