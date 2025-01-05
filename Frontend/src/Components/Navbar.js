import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';


export default function Navbar() 
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
                fontSize: "larger"
            }}
        >
            <Nav.Item>
                <Nav.Link
                 as={Link} // Use Link for navigation
                 to="/" // Define the route
                    eventKey="/"
                    style={{
                        color: activeKey === '/' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "10px",
                        width: "100px"
                    }}
                >
                    Home
                </Nav.Link>
            </Nav.Item>
           
            <Nav.Item>
                <Nav.Link
                as={Link} // Use Link for navigation
                to="/About" // Define the route
                    eventKey="/About"
                    style={{
                      color: activeKey === '/About' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "10px"
                    }}
                >
                    About
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                as={Link} // Use Link for navigation
                to="/Register" // Define the route
                    eventKey="/Register"
                    style={{
                      color: activeKey === '/Register' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "10px"
                    }}
                >
                    Register
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                  as={Link} // Use Link for navigation
                  to="/Login" // Define the route
                    eventKey="/Login"
                    style={{
                      color: activeKey === "/Login" ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "10px"
                    }}
                >
                    Login
                </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link
                as={Link} // Use Link for navigation
                to="/Contactus" // Define the route
                    eventKey="/Contactus"
                    style={{
                      color: activeKey === '/Contactus' ? "maroon" : "pink",
                        fontWeight: "bold",
                        fontSize: "20px",
                        fontStyle: "oblique",
                        marginTop: "51px",
                        marginLeft: "10px"
                    }}
                >
                    Contact-us
                </Nav.Link>
            </Nav.Item>
            <h1 style={{color:"white",marginLeft:"200px",marginTop:"5px"}}>Farm Ease</h1>
            <p style={{color:"white",marginLeft:"-300px",marginTop:"50px",fontStyle:"italic",fontSize:"20px"}}>Crop Information and Disease Solution for Farmers</p>
            <img src="https://us.123rf.com/450wm/sabelskaya/sabelskaya1903/sabelskaya190300199/118612331-vector-cheerful-indian-farmer-barefood-plowing-field-by-means-of-cows-with-traditional-headscarf-at.jpg" alt="logoimg" width="100px" style={{borderRadius:"50px",margin:"80px",marginTop:"-1px"}}/>
        </Nav>
        </div>
        </>
  )
}
