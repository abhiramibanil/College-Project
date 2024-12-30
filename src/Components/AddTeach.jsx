import React, { useState } from 'react';
import './AddStudent.css';
import { registerApi } from '../services/allAPI'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddTeach() {
  const [userData, setUserData] = useState({
    full_name: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    course: '',
    department: '',
    batch: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(setUserData);
    
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const { full_name, dob, gender, email, phone,  password, course, department, batch } = userData;

    if (!full_name || !dob || !gender || !email || !phone || !password || !course || !department || !batch) {
      toast.warning('Please fill out all fields');
      return;
    }

    try {
      const response = await registerApi(userData);

      if (response.status === 200) {
        toast.success('Registration successful');
        setUserData({
          full_name: '',
          dob: '',
          gender: '',
          email: '',
          phone: '',
          pincode: '',
          place: '',
          password: '',
        //  photo
        });
        navigate('/Otp');
      } else {
        toast.error('Registration failed! Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="add-user-container">
      <div className="main">
        <div className="form-container">
          <h1>Add Teacher Details</h1>
          <form onSubmit={handleRegistration}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="name"
                placeholder="Enter your full name"
                value={userData.name}
                onClick={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={userData.course}
                onClick={handleChange}
              >
                <option value="">Select Course</option>
                <option value="Chemical Engineering">Chemical Engineering</option>
                <option value="Computer Engineering">Computer Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electronic Engineering">Electronic Engineering</option>
                <option value="EC Engineering">EC Engineering</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={userData.department}
                onClick={handleChange}
              >
                <option value="">Select Department</option>
                <option value="B.tech">B.tech</option>
                <option value="M.tech">M.tech</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="batch">Batch</label>
              <select
                id="batch"
                name="batch"
                value={userData.batch}
                onClick={handleChange}
              >
                <option value="">Select Batch</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={userData.dob}
                onClick={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={userData.gender}
                onClick={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={userData.phone}
                onClick={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={userData.email}
                onClick={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={userData.password}
                onClick={handleChange}
              />
            </div>
            <div className="form-buttons">
              <button
                type="button"
                className="cancel"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
              <button type="submit" className="create" onClick={handleRegistration}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTeach;
