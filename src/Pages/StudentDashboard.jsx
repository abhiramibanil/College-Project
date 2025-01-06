import React, { useState } from "react";
import "./student.css";
import logo from "../assets/logo.png";
import Graph from "../Components/Graph";
import Stdnotes from "../Components/stdNotes";
import Grade from "../Components/Grade";
import Assignment from "../Components/Assignment";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const username = sessionStorage.getItem("username");
  const [activeFeature, setActiveFeature] = useState(null);

  const handleFeature = (feature) => {
    setActiveFeature(feature);
  };

  const renderFeature = () => {
    switch (activeFeature) {
      case "attend":
        return <Graph />;
      case "grade":
        return <Grade />;
      case "assign":
        return <Assignment />;
      
      default:case "notes":
      return <Stdnotes />;
        return ;
    }
  };

  return (
    <div className="std-box">
      {/* Sidebar Navigation */}
      <div className="student-dash">
        <div className="st-nav shadow">
          <div className="img-s">
            <img src={logo} alt="Logo" className="st-logo shadow" />
          </div>

          <div className="st-sec">
            <div className="scnav" onClick={() => handleFeature("assign")}>
              <i className="fa-solid fa-sheet-plastic"></i>
              <p>Assignments</p>
            </div>
            <div className="scnav" onClick={() => handleFeature("grade")}>
              <i className="fa-solid fa-percent"></i>
              <p>Grades</p>
            </div>
            <div className="scnav" onClick={() => handleFeature("notes")}>
              <i className="fa-solid fa-book"></i>
              <p>Notes</p>
            </div>
            <div className="scnav" onClick={() => handleFeature("attend")}>
              <i className="fa-solid fa-clipboard-user"></i>
              <p>Attendance</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="student-detail">
          {/* Header Section */}
          <div className="person-detail">
            <div className="stdetail w-50 ms-0">
              <div className="uname d-flex justify-content-start">
                <h1>Welcome,</h1>
                <h1 className="text-success"> {username} </h1>
              </div>
              <div className="s-det-btn">
                <button className="sbtn">Active</button>
                <button className="sbtn">
                  <Link to="/home">
                    <i className="fa-solid fa-right-to-bracket st-r"></i> &nbsp; Sign Out
                  </Link>
                </button>
              </div>
            </div>
            <div className="std-pro">
              <i className="fa-solid fa-magnifying-glass fa-p"></i>
              <i className="fa-solid fa-bell fa-p"></i>
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt="Profile"
                className="profilepic"
              />
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="content">{renderFeature()}</div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
