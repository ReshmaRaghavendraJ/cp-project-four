import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';

export default function Farmerdashboard() 
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
                  to="/Farmerdashboard/Postcomplaints" // Define the route
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
                to="/Farmerdashboard/Viewcomplaintstatus" // Define the route
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
                to="/Farmerdashboard/Searchbycategory" // Define the route
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
                 to="/Farmerdashboard/Viewagrioffice" // Define the route
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
                 to="/Farmerdashboard/Postfeedback" // Define the route
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
                 to="/Farmerdashboard/Viewcommodity" // Define the route
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
                 to="/Farmerdashboard/UpdateProfile" // Define the route
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

            <Nav.Item>
                   <Nav.Link
                    as={Link} // Use Link for navigation
                    to="/" // Define the route
                       eventKey="/"
                       style={{
                           color: activeKey === '/' ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "18px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                           marginLeft: "0px",
                           width: "130px"
                       }}
                   >
                       Logout
                   </Nav.Link>
               </Nav.Item>

            <h1 style={{color:"white",marginLeft:"-800px",marginTop:"5px"}}>Farmer Dashboard</h1>
        </Nav>
        </div>  
        
        
        <Card className='table4'>
      <Card.Header><h4 style={{color:"Green"}}><marquee><img src="https://thumbs.dreamstime.com/b/new-burst-5707187.jpg" alt="new" width="80px"/>  View Latest News  <img src="https://thumbs.dreamstime.com/b/new-burst-5707187.jpg" alt="new" width="80px"/></marquee></h4></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
        <thead>
            <tr>
                <th>News id</th>
                <th>News Topic</th>
                <th>Content</th>
                <th>News Date</th>
            </tr>
            </thead>  
            <tbody>
                {
                    newslist.map((item,index)=>(
                        <tr key={index}>
                        <td>{item.newsid}</td>
                        <td>{item.newstopic}</td>
                        <td>{item.content}</td>
                        <td>{item.newsdate}</td>
                    </tr>
                    ))
                }
             </tbody>          
        </table>
        </Card.Text>
      </Card.Body>
    </Card>
   <Outlet/>  
 </>
  )
}
