import React from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";

function AddUser() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1 className="text-dark mt-5 fw-bold mb-5">
          <i className="fa-solid fa-user-plus me-2"></i>SuperUser Portal
        </h1>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="shadow rounded p-4 d-flex justify-content-center align-items-center w-75 custom-height">
          <Link to="/AddStudent" style={{ textDecoration: "none" }}>
            <button
              className="btn btn-warning custom-btn mx-2"
              aria-label="Add Student"
              title="Add Student"
            >
              <i className="fa-solid fa-users me-2"></i>Student
            </button>
          </Link>
          <Link to="/AddTeacher" style={{ textDecoration: "none" }}>
            <button
              className="btn btn-primary custom-btn mx-2"
              aria-label="Add Faculty"
              title="Add Faculty"
            >
              <i className="fa-solid fa-chalkboard-user"></i>Faculty
            </button>
          </Link>
          <Link to="/AddHod" style={{ textDecoration: "none" }}>
            <button
              className="btn btn-danger custom-btn mx-2"
              aria-label="Add Hod"
              title="Add Hod"
            >
              <i className="fa-solid fa-user-tie me-2"></i>HOD
            </button>
          </Link>
          <Link to="/addDepartment" style={{ textDecoration: "none" }}>
            <button
              className="btn btn-success custom-btn mx-2"
              aria-label="Add Department"
              title="Add Department"
            >
              <i className="fa-solid fa-building me-2"></i>Department
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AddUser;
