import React, { useState } from "react";
import "./landing.css";

function Landing() {
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
          <div className="nav-bar">
            <div className="logo">
              <p>BV College</p>
            </div>

            <ul className="nav-dir">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>
                <button className="sign-in-btn">Sign in</button>
              </li>
            </ul>
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
