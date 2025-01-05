import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login'
import About from './Components/About'
import Register from './Components/Register';
import Contactus from './Components/Contactus';
import Farmerdashboard from './Components/Farmerdashboard';
import Admindashboard from './Components/Admindashboard';
import Addcategory from './Components/Addcategory';
import Addcropinfo from './Components/Addcropinfo';
import Addnews from './Components/Addnews';
import Addagrioffice from './Components/Addagrioffice';
import Postcomplaints from './Components/Postcomplaints';
import Searchbycategory from './Components/Searchbycategory';
import Findcropinfo from './Components/Findcropinfo';
import Postfeedback from './Components/Postfeedback';
import Viewagrioffice from './Components/Viewagrioffice';
import UpdateProfile from './Components/UpdateProfile';
import Viewfeedback from './Components/Viewfeedback';
import Viewuserdetails from './Components/Viewuserdetails';
import Viewcomplaints from './Components/Viewcomplaints';
import SolveComplaints from './Components/SolveComplaints';
import Viewcomplaintstatus from './Components/Viewcomplaintstatus';
import AddState from './Components/AddState';
import AddCity from './Components/AddCity';
import AddCommodity from './Components/AddCommodity';
import Viewcommodity from './Components/Viewcommodity';

export default function App()
 {
  return (
   <>
   <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Login" element={<Login />} />
   <Route path="/About" element={<About />} />
   <Route path="/Register" element={<Register />} />
   <Route path="/Contactus" element={<Contactus />} />


   <Route path="Admindashboard" element={<Admindashboard />} >
   <Route path="AddState" element={<AddState />} />
   <Route path="AddCity" element={<AddCity />} />
   <Route path="AddCommodity" element={<AddCommodity />} />
   <Route path="Viewcomplaints" element={<Viewcomplaints />} />  
   <Route path="Addcategory" element={<Addcategory />} />
   <Route path="Addcropinfo" element={<Addcropinfo />} />
   <Route path="Addnews" element={<Addnews />} />
   <Route path="Addagrioffice" element={<Addagrioffice />} />
   <Route path="Viewfeedback" element={<Viewfeedback />} />   
   <Route path="Viewuserdetails" element={<Viewuserdetails />} /> 
    </Route>

   <Route path="Farmerdashboard" element={<Farmerdashboard />} >
   <Route path="Postcomplaints" element={<Postcomplaints />} />
   <Route path="Viewcomplaintstatus" element={<Viewcomplaintstatus />} />
   <Route path="Searchbycategory" element={<Searchbycategory />} />
   <Route path="Viewagrioffice" element={<Viewagrioffice />} />
   <Route path="Postfeedback" element={<Postfeedback />} />
   <Route path="Viewcommodity" element={<Viewcommodity />} />
   <Route path="UpdateProfile" element={<UpdateProfile />} />
    </Route>
    
    <Route path="Findcropinfo/:cropinfoid" element={<Findcropinfo />} />
    <Route path="SolveComplaints/:complaintid" element={<SolveComplaints />} />
   </Routes>
   </BrowserRouter>
   <ToastContainer/>
   </>
  )
}
