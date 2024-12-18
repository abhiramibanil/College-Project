import React, { useState } from "react";
import "./landing.css";
import { Link, useNavigate } from "react-router-dom";

function Landing() {
   
  const navigate=useNavigate()
  const username=sessionStorage.getItem("username")

  const handleLogout = () => {
   
    sessionStorage.clear();
    
};
  const [uniDetail, setUniDetail] = useState([
    {
      icon: <i class="fa-solid fa-magnifying-glass fmg"></i>,
      p1: "Find a course",
      p2: "Search by subject, course or region to find the right course for you.",
    },
    {
      icon: <i class="fa-regular fa-calendar-days fmg"></i>,
      p1: "Find a uiversity",
      p2: "Search for Courses to find out about courses and more. ",
    },
    {
      icon: <i class="fa-solid fa-house fmg"></i>,
      p1: "Find an open day",
      p2: "Search and book open days to help you make the right choice.",
    },
  ]);
  return (
    <>
      <>
        <div className="landing-page">
          <div className="nav-bar d-flex justify-content-between">
            <div className="logo ms-5">
              <p>BV College</p>
            </div>

          
              
              <div className="me-5">
                <div className="d-flex text-white ">
                  <button className="cc me-2 btn btn-ouline-success"><i class="fa-solid fa-user me-1"></i>{username}</button>
                  {/* <h5 className="mt-2 me-2">{username}</h5> */}
              <Link to='/studentDash'  style={{textDecoration:"none"}}>
              <button className="sign-in-btn">Dashboard</button>
              </Link>
              <Link to='/'  style={{textDecoration:"none"}}>
              <button className="logout btn -btn-danger ms-2" onClick={handleLogout}>logut<i class="fa-solid fa-right-from-bracket ms-1"></i></button>
              </Link>
              </div>
              
                
              </div>
              
            
        
          </div>
          <div className="land-text">
            <p>
              Get Ready to <span className="expl">Explore</span> now!{" "}
            </p>
            <p>Empowering Minds, Shaping Futures.</p>
          </div>
        </div>

        <div className="uni-content">
          <p>
            Explore endless opportunities and shape your future with BV College.
            Discover our top-ranked programs, connect with a vibrant community
            of learners, and embark on a journey of academic excellence. With
            diverse fields of study, expert faculty, and state-of-the-art
            resources, we provide everything you need to achieve your dreams.
            Begin your journey with us today and find your perfect place to
            thrive
          </p>
          <button>GET STARTED</button>
        </div>

        <div className="uni-detail">
          {uniDetail.map((uni) => {
            return (
              <div className="detail-box">
                {uni.icon}
                <div className="detail-box-text">
                  <p>{uni.p1}</p>
                  <p>{uni.p2}</p>
                  <p>
                    Get Started <i class="fa-solid fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
}

export default Landing;
