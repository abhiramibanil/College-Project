import React, { useState } from "react";
import "./TeachDash.css";
import logo from "../assets/logo.png";
import trprofile from "../assets/trprofile.jpg";
import Coursedetails from "../Components/Coursedetails";
import Notes from "../Components/Notes";
import Taskresponse from "../Components/Taskresponse";
import Overview from "../Components/Overview";
import { Link } from "react-router-dom";
import AttendanceSheet from "../Components/AttendSheet";

function TeachDash() {
  const [activeFeature, setActiveFeature] = useState(null);

  const handleFeature = (feature) => {
    setActiveFeature(feature);
  };

  const renderFeature = () => {
    switch (activeFeature) {
      case "coursesche":
        return <Coursedetails />;
      case "taskres":
        return <Taskresponse />;
      case "notes":
        return <Notes />;
        case "attendence":
        return <AttendanceSheet />;
      default:
        case "overview":
          return <Overview />;
        return 
    }
  };

  return (
    <div className="box">
      {/* Sidebar Navigation */}
      <div className="sidenav shadow">
        <div className="loge">
          <img src={logo} alt="Logo" className="logee shadow" />
        </div>
        <div className="overview" onClick={() => handleFeature("overview")}>
          <i className="fa-solid fa-table-cells size"></i>
          <h6>Overview</h6>
        </div>
        <div className="overview" onClick={() => handleFeature("coursesche")}>
          <i className="fa-solid fa-file size"></i>
          <h6>Course Schedule</h6>
        </div>
        <div className="overview" onClick={() => handleFeature("taskres")}>
          <i className="fa-regular fa-clipboard size"></i>
          <h6>Task Response</h6>
        </div>
        <div className="overview" onClick={() => handleFeature("notes")}>
          <i className="fa-solid fa-book size"></i>
          <h6>Notes</h6>
        </div>
        <div className="overview" onClick={() => handleFeature("attendence")}>
          <i className="fa-solid fa-book size"></i>
          <h6>Attendence</h6>
        </div>
      </div>

      {/* Topbar and Content Area */}
      <div className="topbar">
        {/* Header Section */}
        <div className="fr-box">
          <div className="fbox">
            <h3>WELCOME, USER!</h3>
            <div className="btn-box">
              <button className="sbtn">Active</button>
              <button className="sbtn">
                <Link to="/home">
                  <i className="fa-solid fa-right-to-bracket st-r"></i> &nbsp; Sign Out
                </Link>
              </button>
            </div>
          </div>
          <div className="f2box">
            <i className="awsome fa-solid fa-magnifying-glass"></i>
            <i className="awsome fa-solid fa-bell"></i>
            <div className="pic1">
              <img src={trprofile} alt="Profile" className="pic shadow" />
            </div>
          </div>
        </div>

        {/* Dynamic Content Rendering */}
        <div className="content">{renderFeature()}</div>
      </div>
    </div>
  );
}

export default TeachDash;
