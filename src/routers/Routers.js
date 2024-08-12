import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Services from "../pages/services"
import Repair from "../pages/New"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Productslist from "../pages/productslist"
import Cart from "../components/UI/Cart";
import License from "../components/UI/License";
import  Payment  from "../pages/Payment";
import Paymentnew from"../pages/paymentaccess";
import AdminDashboard from "../Dashboard/AdminDashboard.js";
import UserDashboard from "../Dashboard/UserDashboard.js";
import UserManagement from "../Dashboard/UserManagement.js";
import ReportPage from "../Dashboard/ReportPage.js";
import SettingsPage from "../Dashboard/SettingsPage.js";
import ServiceReport from "../Dashboard/ServiceReport.js";
import RentalReport from "../Dashboard/RentalReport.js";
import AccessoriesReport from "../Dashboard/AccessoriesReport.js";
import GridView from "../Dashboard/GridView.js";
import EditUser from "../Dashboard/EditUser.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/New" element={<Repair/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Products" element={<Productslist/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/License" element={<License/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/paymentnew" element={<Paymentnew/>}/>
      <Route path="/UserDashboard" element={<UserDashboard />}></Route>
      <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>  
      <Route path='/UserManagement' element={<UserManagement/>}></Route> 
      <Route path='/ReportPage' element={<ReportPage/>}></Route> 
      <Route path='/SettingsPage' element={<SettingsPage/>}></Route> 
      <Route path='/ServiceReport' element={<ServiceReport/>}></Route> 
      <Route path='/RentalReport' element={<RentalReport/>}></Route> 
      <Route path='/AccessoriesReport' element={<AccessoriesReport/>}></Route> 
      <Route path='/GridView' element={<GridView/>}></Route> 
      <Route path="/edit-user/:id" element={<EditUser />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
