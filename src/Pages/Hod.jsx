import React, { useState } from 'react';
import "./hodStyle.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HodOverview from '../Components/HodOverview';
//import HodCourse from '../Components/HodCourse';
import HodFaculty from '../Components/HodFaculty';
import HodAnnounce from '../Components/HodAnnounce';
import FacultyAtendence from '../Components/FacultyAtendence';


function Hod() {
  const [activeFeature, setActiveFeature] = useState("hodoverview");

  const handleFeature = (feature) => {
    setActiveFeature(feature);
  };

  const renderFeature = () => {
    switch (activeFeature) {

      // case "cource":
      //   return <HodCourse />;
      case "announce":
        return <HodAnnounce />;
      case "faculty":
        return <HodFaculty />;
        case "Attendence":
        return <FacultyAtendence />;
      default: 
      case "hodoverview":
      return <HodOverview />;
        return 
    }
  };

  return (
    <div className="std-box">
      <div className="student-dash">
        {/* Sidebar Navigation */}
        <div className="st-nav shadow">
          <div className="img-s">
            <img src={logo} alt="Logo" className="st-logo shadow" />
          </div>

          <div className="st-sec">
            <div
              className={`scnav ${activeFeature === "hodoverview" ? "active" : ""}`}
              onClick={() => handleFeature("hodoverview")}
            >
              <i className="fa-solid fa-border-all"></i>
              <p className="mt-3">Overview</p>
            </div>

            {/* <div
              className={`scnav ${activeFeature === "cource" ? "active" : ""}`}
              onClick={() => handleFeature("cource")}
            >
              <i className="fa-solid fa-file size"></i>
              <p className="mt-3">Courses</p>
            </div> */}

            <div
              className={`scnav ${activeFeature === "announce" ? "active" : ""}`}
              onClick={() => handleFeature("announce")}
            >
              <i className="fa-solid fa-volume-low size"></i>
              <p className="mt-3">Announcements</p>
            </div>

            <div
              className={`scnav ${activeFeature === "faculty" ? "active" : ""}`}
              onClick={() => handleFeature("faculty")}
            >
              <i className="fa-solid fa-chalkboard-user size"></i>
              <p className="mt-3">Faculty</p>
            </div>
            <div
              className={`scnav ${activeFeature === "Attendence" ? "active" : ""}`}
              onClick={() => handleFeature("Attendence")}
            >
              <i className="fa-solid fa-chalkboard-user size"></i>
              <p className="mt-3">Attendence</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="student-detail shadow me-4">
          {/* Header Section */}
          <div className="person-detail">
            <div className="stdetail">
              <h1>Welcome, HOD</h1>

              <div className="s-det-btn">
                <button className="sbtn">Active</button>
                <button className="sbtn">
                  <Link to="/home">
                    <i className="fa-solid fa-right-to-bracket st-r btn-danger"></i>
                    &nbsp; Sign Out
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

          {/* Dynamic Content Rendering */}
          <div className="content">{renderFeature()}</div>
        </div>
      </div>
    </div>
  );
}

export default Hod;
