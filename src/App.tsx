import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navi from "./navbar";
import Home from "./home";
import EmployerDashboard from "./employerDashboard";
import FreelancerDashboard from "./freelancerDashboard";
import './App.css';

function App() {
  return (
    <Router>
    <Navi />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Employer" element={<EmployerDashboard />} />
      <Route path="/Employer/CreateContract" element={<EmployerDashboard />}/>
      {/* <Route path="/Freelancer/Requests" element={<FreelancerDashboard/>} /> */}
      <Route path="/Employer/Requests" element={<EmployerDashboard />} />
      <Route path="/Freelancer" element={<FreelancerDashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
