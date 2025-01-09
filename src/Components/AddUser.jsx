import React from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";
import AdminSideNav from './AdminSideNav';

function AddUser() {
  return (
    <>
      <AdminSideNav />
      <div className="container d-flex flex-wrap justify-content-center align-items-center mt-4">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <img
                src="https://plus.unsplash.com/premium_photo-1681248156367-d95876bf885d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top fixed-img"
                alt="Student"
              />
              <div className="card-body">
                
                <Link to="/AddStudent" style={{textDecoration:'none'}}>
                <i class="fa-solid fa-plus"></i> Student
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <img
                src="https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top fixed-img"
                alt="Faculty"
              />
              <div className="card-body">
                
                <Link to="/AddTeacher" style={{textDecoration:'none'}}>
                <i class="fa-solid fa-plus"></i> Faculty
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <img
                src="https://plus.unsplash.com/premium_photo-1726729313345-752ac8306c90?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top fixed-img"
                alt="HOD"
              />
              <div className="card-body">
                
                <Link to="/AddHod" style={{textDecoration:'none'}}>
                <i class="fa-solid fa-plus"></i> HOD
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm text-center h-100">
              <img
                src="https://images.unsplash.com/photo-1586764921681-d37bdbf9165a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top fixed-img"
                alt="Department"
              />
              <div className="card-body">
                
                <Link to="/addDepartment" style={{textDecoration:'none'}}>
                <i class="fa-solid fa-plus"></i>Department
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
