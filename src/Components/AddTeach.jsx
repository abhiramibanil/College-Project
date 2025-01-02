import React, { useState } from "react";
import "./AddStudent.css";
import { registerApi } from "../services/allAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddTeach() {
  const [userData, setUserData] = useState({
    full_name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    department: "",
    role: "faculty ", // Default role
  });

  const [isLoading, setIsLoading] = useState(false); // To manage the loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    const { full_name, dob, gender, email, phone, password, department, role } =
      userData;

    if (
      !full_name ||
      !dob ||
      !gender ||
      !email ||
      !phone ||
      !password ||
      !department
    ) {
      toast.warning("Please fill out all fields");
      setIsLoading(false); // Reset loading state
      return;
    }

    try {
      const response = await registerApi({
        full_name,
        dob,
        gender,
        email,
        phone,
        password,
        department,
        role,
      });

      console.log("User Data:", userData); // Debug log to check data being sent

      if (response.status === 200) {
        toast.success("OTP sent successful");
        setUserData({
          full_name: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          password: "",
          role: "hod",
          //  photo
        });
        navigate("/Otp", { state: { email } });
      } else {
        toast.error("Registration failed! Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state after the request
    }
  };

  return (
    <div className="add-user-container">
      <div className="main">
        <div className="form-container">
          <h1>Add Faculty Details</h1>
          <form onSubmit={handleRegistration}>
            {/* Full Name Field */}
            <div className="form-group">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Enter your full name"
                value={userData.full_name}
                onChange={handleChange}
              />
            </div>
            {/* Date of Birth Field */}
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
            {/* Gender Field */}
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
            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={userData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={userData.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>
            {/* Department Field */}
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={userData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="1">B.Tech</option>
                <option value="2">M.Tech</option>
              </select>
            </div>
            {/* Buttons */}
            <div className="form-buttons">
              <button
                type="button"
                className="cancel"
                onClick={() => navigate("/")}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button type="submit" className="create" disabled={isLoading}>
                {isLoading ? "Registering..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTeach;
