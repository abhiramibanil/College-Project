import React, { useState } from 'react'; 
import "./hodStyle.css"; 
import logo from "../assets/logo.png"; 
import Graph from "../Components/Graph"; 
import Stdnotes from "../Components/stdNotes"; 
import Grade from "../Components/Grade"; 
import Assignment from "../Components/Assignment"; 
import { Link } from "react-router-dom";
import HodOverview from '../Components/HodOverview'; // Removed duplicate import
import HodCourse from '../Components/HodCourse';
import HodFaculty from '../Components/HodFaculty';
import HodAnnounce from '../Components/HodAnnounce';

function Hod() {
  const [activeFeature, setActiveFeature] = useState(null);

  const handleFeature = (feature) => {
    setActiveFeature(feature);
  };

  return (
    <>
      <div className="std-box">
        <div className="student-dash">
          <div className="st-nav shadow">
            <div className="img-s">
              {/* Uncomment the logo if required */}
              <img src={logo} alt="Logo" className="st-logo shadow" />
            </div>

            <div className="st-sec">
              <div className={`scnav ${activeFeature === "hodoverview" ? "active" : ""}`} onClick={() => handleFeature("hodoverview")}>
                <i className="fa-solid fa-border-all"></i>
                <p className='mt-3'>Overview</p>
              </div>

              <div className={`scnav ${activeFeature === "assign" ? "active" : ""}`} onClick={() => handleFeature("cource")}>
              <i class="fa-solid fa-file  size"></i>
                <p className='mt-3'>Cources</p>
              </div>

              <div className={`scnav ${activeFeature === "grade" ? "active" : ""}`} onClick={() => handleFeature("announce")}>
              <i class="fa-solid fa-volume-low size"></i>
                <p className='mt-3'>Announcements</p>
              </div>

              

              <div className={`scnav ${activeFeature === "attend" ? "active" : ""}`} onClick={() => handleFeature("faculty")}>
              <i class="fa-solid fa-chalkboard-user size"></i>
                <p className=''>Facultys</p>
              </div>
            </div>
          </div>

          <div className="student-detail shadow me-4">
            <div className="person-detail">
              <div className="stdetail">
                <h1>Welcome, HOD </h1>

                <div className="s-det-btn">
                  <button className="sbtn">Active</button>

                  <button className="sbtn">
                    <Link to="/home">
                      <i className="fa-solid fa-right-to-bracket st-r btn-danger"></i> &nbsp;
                      SignOut
                    </Link>
                  </button>
                </div>
              </div>

              <div className="std-pro">
                <i className="fa-solid fa-magnifying-glass fa-p"></i>
                <i className="fa-solid fa-bell fa-p"></i>
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  alt="Profile Pic"
                  className="profilepic"
                />
              </div>
            </div>

            {/* Dynamic Components Based on Active Feature */}
            {activeFeature === "hodoverview" && <HodOverview />}
            {activeFeature === "cource" && <HodCourse />}
            {activeFeature === "announce" && <HodAnnounce />}
            {activeFeature === "faculty" && <HodFaculty />}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Hod;
