import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Viewnews() 
{
    const location = useLocation(); // Get current location
    const [activeKey, setActiveKey] = useState(location.pathname);
    const[newslist,setNewslist]=useState([]); //Display list of news

    useEffect(() => {
        setActiveKey(location.pathname); // Update active key when location changes
    }, [location]);

    useEffect(()=>{
        getallnews();
    },[])

    function getallnews()  /* display list of News */
    {
      axios
      .get("http://localhost:8080/getallnews")
      .then((res)=>{
          setNewslist(res.data);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
    }

  return (
    <>
 <div>
        <Nav
            variant="tabs"
            activeKey={activeKey}
            onSelect={setActiveKey}
            style={{
                height: "100px",
                textAlign: "center",
                background: "maroon",
            }}
        >
            <Nav.Item>
                <Nav.Link
                  as={Link} // Use Link for navigation
                  to="/Postcomplaints" // Define the route
                    eventKey="/Postcomplaints"
                    style={{
                      color: activeKey === "/Postcomplaints" ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "5px"
                    }}
                >
                    Postcomplaints
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                as={Link} // Use Link for navigation
                to="/Viewcomplaintstatus" // Define the route
                    eventKey="/Viewcomplaintstatus"
                    style={{
                      color: activeKey === '/Viewcomplaintstatus' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "0px"
                    }}
                >
                    Viewcompstatus
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                as={Link} // Use Link for navigation
                to="/Searchbycategory" // Define the route
                    eventKey="/Searchbycategory"
                    style={{
                      color: activeKey === '/Searchbycategory' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "0px"
                    }}
                >
                    Searchbycategory
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                as={Link} // Use Link for navigation
                to="/Viewnews" // Define the route
                    eventKey="/Viewnews"
                    style={{
                      color: activeKey === '/Viewnews' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "0px"
                    }}
                >
                    Viewnews
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                 as={Link} // Use Link for navigation
                 to="/Viewagrioffice" // Define the route
                    eventKey="/Viewagrioffice"
                    style={{
                        color: activeKey === '/Viewagrioffice' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "0px",
                        width: "150px"
                    }}
                >
                    ViewOffice
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                 as={Link} // Use Link for navigation
                 to="/Postfeedback" // Define the route
                    eventKey="/Postfeedback"
                    style={{
                        color: activeKey === '/Postfeedback' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "0px",
                        width: "150px"
                    }}
                >
                    Postfeedback
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                 as={Link} // Use Link for navigation
                 to="/Viewcommodity" // Define the route
                    eventKey="/Viewcommodity"
                    style={{
                        color: activeKey === '/Viewcommodity' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "0px",
                        width: "157px"
                    }}
                >
                    Viewcommodity
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                 as={Link} // Use Link for navigation
                 to="/UpdateProfile" // Define the route
                    eventKey="/UpdateProfile"
                    style={{
                        color: activeKey === '/UpdateProfile' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "18px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "0px",
                        width: "150px"
                    }}
                >
                    UpdateProfile
                </Nav.Link>
            </Nav.Item>

            <h1 style={{color:"white",marginLeft:"-500px",marginTop:"5px"}}>Farmer Dashboard</h1>
        </Nav>
        </div>  
        <Link to="/" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FbkEt8EWDLyJwqQ80JvC9klbXTQJ-qGX6QzuBSvcN1kbg7xa8725OkrAaOO734wog-E&usqp=CAU" alt="backimg" width="50px"/></Link>
               
               <div className='table1'>
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
               </>
  )
}
