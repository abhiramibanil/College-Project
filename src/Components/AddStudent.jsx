import React from 'react'
import './AddStudent.css'

function AddStudent() {
  return (
    <>
     <div className="add-user-container"
     >

  
  <div className="main">
    <div className="form-container">
      <h1>Add Student Details</h1>
      <form>
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* <div className="form-group">
          <label htmlFor="parent-number">Parent Number</label>
          <input type="text" id="parent-number" placeholder="Enter Parent Number" />
        </div> */}
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <div className="phone-input">
            <select>
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input type="text" id="phone-number" placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <select id="course">
            <option value="">Select Course</option>
            <option value="course1">Chemical Engineering</option>
            <option value="course2">Computer Engineering</option>
            <option value="course3">Civil Engineering</option>
            <option value="course4">Electronic Engineering</option>
            <option value="course5">EC Engineering</option>
            <option value="course6">Civil Engineering</option>



          </select>
        </div>
        <div className="form-group">
          <label htmlFor="course">Department</label>
          <select id="course">
            <option value="">Select Course</option>
            <option value="course1">B.tech</option>
            <option value="course2">M.tech</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="create">Create</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default AddStudent