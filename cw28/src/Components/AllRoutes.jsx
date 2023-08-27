import React from 'react';
import {   Route,Routes } from 'react-router-dom';
import Features from '../Pages/Features';
import Courses from '../Pages/Courses';
import Login from '../Pages/login';
import Pricing from '../Pages/Pricing';
import Tutorial from '../Pages/Tutorial';
import ProductPage from '../Pages/ProductPage';
import Home from '../Pages/Home';

function AllRoutes() { 
  return (
    //  <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/features" element={<Features/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/pricing" element={<Pricing/>} />
        <Route exact path="/tutorial" element={<Tutorial/>} />
        <Route exact path="/courses/:id" element={<ProductPage/>} />        
      </Routes>
    //  </Router>
    //   <>Routes</>
  );
}

export default AllRoutes;


