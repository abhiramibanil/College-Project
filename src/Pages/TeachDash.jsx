import React, { useState } from "react";
import "./TeachDash.css";
import logo from "../assets/logo.png";
import trprofile from "../assets/trprofile.jpg";
import Coursedetails from "../Components/Coursedetails";
import Notes from "../Components/Notes";
import Taskresponse from "../Components/Taskresponse";
import Overview from "../Components/Overview";
import { Link } from "react-router-dom";


function TeachDash() {
  const [activeFeature, setactiveFeature] = useState(null);
  const handleFeature = (feature) => {
    setactiveFeature(feature);
  };

  return (
    <>
      <div className="box">
        <div className="sidenav shadow">
          <div className="loge">
            <img src={logo} alt="" className="logee shadow" />
          </div>
          <div className="overview" onClick={() => handleFeature("overview")}>
            <i class="fa-solid fa-table-cells size"></i>
            <h6>overview</h6>
          </div>
          <div className="overview" onClick={() => handleFeature("coursesche")}>
            {" "}
            <i class="fa-solid fa-file  size"></i>
            <h6>Course Schedule</h6>
          </div>
          <div className="overview" onClick={() => handleFeature("taskres")}>
            <i class="fa-regular fa-clipboard size"></i>
            <h6>Task Response</h6>
          </div>
          <div className="overview" onClick={() => handleFeature("notes")}>
            <i class="fa-solid fa-book size"></i>
            <h6>Notes</h6>
          </div>

          <div className="overview">
            <i class="fa-regular fa-comment size"></i>
            <h6>Chat Box</h6>
          </div>
        </div>
        <div className="topbar">
          <div className="fr-box">
            <div className="fbox">
              <h3>WELCOME , USER!</h3>
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
            <div className="f2box">
              <i class="awsome fa-solid fa-magnifying-glass"></i>
              <i class="awsome fa-solid fa-bell"></i>
              <div className="pic1">
                <img src={trprofile} alt="" className="pic shadow" />
              </div>
            </div>
          </div>

          {activeFeature === "overview" && <Overview />}
          {activeFeature === "coursesche" && <Coursedetails />}
          {activeFeature === "taskres" && <Taskresponse />}
          {activeFeature === "notes" && <Notes />}
        </div>
      </div>
    </>
  );
}

export default TeachDash;
