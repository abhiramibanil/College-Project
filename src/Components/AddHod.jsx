import React, { useState } from "react";
import "./AddStudent.css";
import { registerApi } from "../services/allAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddHod() {
  const [userData, setUserData] = useState({
    full_name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    department: "",
    role: "hod", // Default role
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { full_name, dob, gender, email, phone, password, department } =
      userData;

    // Validate if all fields are filled
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
      setIsLoading(false);
      return;
    }

    try {
      const response = await registerApi({
        ...userData,
        department: Number(department), // Ensure department is sent as a number
      });

      if (response.status === 200) {
        toast.success("Registration successful");
        setUserData({
          full_name: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          password: "",
          department: "",
          role: "hod",
        });
        navigate("/Otp", { state: { email: userData.email } });
      } else {
        toast.error("Registration failed! Please try again.");
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );

      // Display backend errors
      if (error.response?.data) {
        const errors = error.response.data;
        for (const field in errors) {
          toast.error(`${field}: ${errors[field].join(", ")}`);
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="add-user-container">
      <div className="main">
        <div className="form-container">
          <h1>Add HOD Details</h1>
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

export default AddHod;
