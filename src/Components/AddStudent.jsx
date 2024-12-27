import React, { useState } from 'react';
import './AddStudent.css';
import { registerApi } from '../services/allAPI'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Ensure toast is installed and imported

function AddStudent() {
  const [userData, setUserData] = useState({
    name: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    pincode: '',
    place: '',
    password: '',
    course: '',
    department: '',
  });


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const { full_name, dob, gender, email, phone, pincode, place, password, course, department } = userData;

    if (!full_name || !dob || !gender || !email || !phone || !pincode || !place || !password || !course || !department) {
      toast.warning('Please fill out all fields');
      return;
    }

    try {
      const response = await registerApi(userData);

      if (response.status === 200) {
        toast.success('Registration successful');
        console.log(userData);
        
        setUserData({
          full_name: '',
          dob: '',
          gender: '',
          email: '',
          phone: '',
          pincode: '',
          place: '',
          password: '',
          course: '',
          department: '',
          role:'student',
        });
        navigate('/login'); 
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
          <h1>Add Student Details</h1>
          <form onSubmit={handleRegistration}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Enter your full name"
                value={userData.full_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={userData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-input">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={userData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image"></label>
              <input
                type="image"
                id="image"
                name="image"
                value={userData.image}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={userData.course}
                onChange={handleChange}
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
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="B.tech">B.tech</option>
                <option value="M.tech">M.tech</option>
              </select>
            </div>
            <div className="form-buttons">
              <button type="button" className="cancel" onClick={() => navigate('/')}>
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

export default AddStudent;
