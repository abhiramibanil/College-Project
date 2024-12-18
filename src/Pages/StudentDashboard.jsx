import React, { useState } from "react";
import "./student.css";
import logo from "../assets/logo.png";
import Graph from "../Components/Graph";
import Stdnotes from "../Components/stdNotes";
import Grade from "../Components/Grade";
import Assignment from "../Components/Assignment";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const username=sessionStorage.getItem("username")
  const [activeFeature, setActiveFeature] = useState(null);

  const handleFeature = (feature) => {
    setActiveFeature(feature);
  };

  return (
    <>
      <div className="std-box">
        <div className="student-dash">
          <div className="st-nav">
            <div className="img-s">
              <img src={logo} alt="" className="st-logo shadow" />
            </div>

            <div className="st-sec">
              <div className="scnav">
                <i class="fa-solid fa-border-all"></i>
                <p>Overview</p>
              </div>

              <div className="scnav" onClick={(e) => handleFeature("assign")}>
                <i class="fa-solid fa-sheet-plastic"></i>
                <p>Assignments</p>
              </div>

              <div className="scnav" onClick={(e) => handleFeature("grade")}>
                <i class="fa-solid fa-percent"></i>
                <p>Grades</p>
              </div>

              <div className="scnav" onClick={(e) => handleFeature("notes")}>
                <i class="fa-solid fa-book"></i>
                <p>Notes</p>
              </div>

              <div className="scnav" onClick={(e) => handleFeature("attend")}>
                <i class="fa-solid fa-clipboard-user"></i>
                <p>Attendance</p>
              </div>
            </div>
          </div>

          <div className="student-detail">
            {/* --------------StudentDetail---------------- */}

            <div className="person-detail">
              <div className="stdetail ">
                <div className="d-flex justify-content-center"> <h1>Welcome,</h1><h1 className="text-success"> {username} </h1></div>
               

                <div className="s-det-btn">
                  <button className="sbtn">Active</button>

                  <button className="sbtn">
                    <Link to={"/home"}>
                      <i class="fa-solid fa-right-to-bracket st-r"></i> &nbsp;
                      SignOut
                    </Link>
                  </button>
                </div>
              </div>

              <div className="std-pro">
                <i class="fa-solid fa-magnifying-glass fa-p"></i>
                <i class="fa-solid fa-bell fa-p"></i>
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  alt=""
                  className="profilepic"
                />
              </div>
            </div>

            {activeFeature === "attend" && <Graph />}
            {activeFeature === "grade" && <Grade />}
            {activeFeature === "assign" && <Assignment />}
            {activeFeature === "notes" && <Stdnotes />}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
