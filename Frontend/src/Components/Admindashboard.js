import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Admindashboard() 
{
    const location = useLocation(); // Get current location
    const [activeKey, setActiveKey] = useState(location.pathname);
  
    useEffect(() => {
      setActiveKey(location.pathname); // Update active key when location changes
  }, [location]);

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
                     to="/Admindashboard/AddState" // Define the route
                       eventKey="/AddState"
                       style={{
                         color: activeKey === "/AddState" ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                           marginLeft: "5px"
                       }}
                   >
                       AddState
                   </Nav.Link>
               </Nav.Item>
   
               <Nav.Item>
                   <Nav.Link
                     as={Link} // Use Link for navigation
                     to="/Admindashboard/AddCity" // Define the route
                       eventKey="/AddCity"
                       style={{
                         color: activeKey === "/AddCity" ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                           marginLeft: "0px"
                       }}
                   >
                       AddCity
                   </Nav.Link>
               </Nav.Item>
   
               <Nav.Item>
                   <Nav.Link
                     as={Link} // Use Link for navigation
                     to="/Admindashboard/AddCommodity" // Define the route
                       eventKey="/AddCommodity"
                       style={{
                         color: activeKey === "/AddCommodity" ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                           marginLeft: "0px"
                       }}
                   >
                       AddCommodity
                   </Nav.Link>
               </Nav.Item>
   
   
               <Nav.Item>
                   <Nav.Link
                     as={Link} // Use Link for navigation
                     to="/Admindashboard/Viewcomplaints" // Define the route
                       eventKey="/Viewcomplaints"
                       style={{
                         color: activeKey === "/Viewcomplaints" ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                         marginLeft: "0px"
                       }}
                   >
                       Viewcomplaints
                   </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link
                   as={Link} // Use Link for navigation
                   to="/Admindashboard/Addcategory" // Define the route
                       eventKey="/Addcategory"
                       style={{
                         color: activeKey === '/Addcategory' ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                          marginLeft: "0px"
                       }}
                   >
                       Addcategory
                   </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link
                   as={Link} // Use Link for navigation
                   to="/Admindashboard/Addcropinfo" // Define the route
                       eventKey="/Addcropinfo"
                       style={{
                         color: activeKey === '/Addcropinfo' ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                          marginLeft: "0px"
                       }}
                   >
                       Addcropinfo
                   </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link
                   as={Link} // Use Link for navigation
                   to="/Admindashboard/Addnews" // Define the route
                       eventKey="/Addnews"
                       style={{
                         color: activeKey === '/Addnews' ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                        marginLeft: "0px"
                       }}
                   >
                       Addnews
                   </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link
                    as={Link} // Use Link for navigation
                    to="/Admindashboard/Addagrioffice" // Define the route
                       eventKey="/Addagrioffice"
                       style={{
                           color: activeKey === '/Addagrioffice' ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                       marginLeft: "0px",
                           width: "120px"
                       }}
                   >
                       AddOffice
                   </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link
                    as={Link} // Use Link for navigation
                    to="/Admindashboard/Viewfeedback" // Define the route
                       eventKey="/Viewfeedback"
                       style={{
                           color: activeKey === '/Viewfeedback' ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                         marginLeft: "0px",
                           width: "150px"
                       }}
                   >
                       Viewfeedback
                   </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link
                    as={Link} // Use Link for navigation
                    to="/Admindashboard/Viewuserdetails" // Define the route
                       eventKey="/Viewuserdetails"
                       style={{
                           color: activeKey === '/Viewuserdetails' ? "maroon" : "pink",
                           fontWeight: "bold",
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "51px",
                           marginLeft: "0px",
                           width: "120px"
                       }}
                   >
                       Viewfarmers
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
                           fontSize: "16px",
                           fontStyle: "oblique",
                           marginTop: "-43px",
                           marginLeft: "1250px",
                           width: "130px"
                       }}
                   >
                       Logout
                   </Nav.Link>
               </Nav.Item>
               <h1 style={{color:"white",marginLeft:"300px",marginTop:"-90px"}}>Admin Dashboard</h1>
           </Nav>
        </div> 
        <Outlet/>
 </>
  )
}
