import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Addnews()
 {
    const[newstopic,setNewstopic]=useState('');
    const[content,setContent]=useState('');
    const[newslist,setNewslist]=useState([]);
    const[hidenews,setHidenews]=useState(false);  //Hide news list


    function addnews()        /* Add News details */
    {
        if(newstopic==="")
            {
                toast.error("Please enter newstopic");
                return 0;
            }
            if(content==="")
                {
                    toast.error("Please enter content");
                    return 0;
                }
        const obj={newstopic,content};
        axios
        .post("http://localhost:8080/addnews",obj)
        .then((res)=>{
            toast.success(res.data);
            setHidenews(false);
            clearAll();
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }

    function getallnews()   /* list of News details */
    {
        axios
        .get("http://localhost:8080/getallnews")
        .then((res)=>{
            setNewslist(res.data);
            setHidenews(true);
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
    }

    function clearAll()
    {
        setNewstopic("");
        setContent("");
    }

  return (
    <>

        <h1 style={{color:"Red",marginLeft:"200px"}}>Add News</h1> 
        <div className='newsinfo'>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label><h5>News Topic:</h5></Form.Label>
        <Form.Control type="text" value={newstopic} onChange={(e)=>setNewstopic(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h5>Content:</h5></Form.Label>
        <Form.Control type="textarea" value={content} onChange={(e)=>setContent(e.target.value)} style={{width:"570px",height:"100px"}}/>
      </Form.Group>
      </Form>  
     <br></br>
      <div className='butons'>
      <Button variant="primary me-3" size="md" onClick={addnews}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="success me-3" size="md" onClick={getallnews}>
       Display
      </Button>
      </div>   <br></br>   
      </div>

     { hidenews && (
      <div className='newstable'>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>News id</th>
                <th>News Topic</th>
                <th>Content</th>
            </tr>
            </thead>  
            <tbody>
             {
                newslist.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.newsid}</td>
                        <td>{item.newstopic}</td>
                        <td>{item.content}</td>
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
