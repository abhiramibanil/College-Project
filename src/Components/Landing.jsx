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
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQ0uNyu5bhFP72eISTo_6zfxowBADsY61Rw&s" alt="Chairman" />,
    p1: " Prof.Dr Freddy Frenandas",
    p2: "Chairman",
    p3:"Phd in IT  & Reserach Coordinator Dept of Information Technology ",
  },
  {
    icon:  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J5Bsi7UrlOsw-9agdJ8ekj3SqLFypPmF65EHjDBri92JKDk1alQUK6ean1BzmjF9a7w&usqp=CAU" alt="Find a course" />,
    p1: "Prof. Dr Sanjna Mathew",
    p2: "Principal",
    p3: "phd in Structural Engineering (Mtech)",
  },
  {
    icon:  <img src="https://www.shcollege.ac.in/wp-content/uploads/Images/Staff/Teaching/Jeleeta-Rose-C-N.png" alt="Find a course" />,
    p1: "Prof.Rhithika Nambiyar",
    p2: "Vice Pricipal & HOD of Civil",
    p3: "Mtech (Civil) & Phd scholar in Civil",
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
                  <p className="ms-1">{uni.p1}</p>
                  <p className="ms-2">{uni.p2}</p>
                  <p className="ms-2">
                  {uni.p3}
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
