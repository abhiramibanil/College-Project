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
    role: "faculty", // Default role (fixed)
  });

  const [isLoading, setIsLoading] = useState(false); // To manage the loading state
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value.trim() });
  };

  // Input validation
  const validateInputs = () => {
    const { full_name, dob, gender, email, phone, password, department } = userData;

    if (!full_name.trim()) return "Full Name is required.";
    if (!dob) return "Date of Birth is required.";
    if (!gender) return "Gender is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Invalid email format.";
    if (!/^\d{10}$/.test(phone)) return "Phone number must be 10 digits.";
    if (password.length < 6) return "Password must be at least 6 characters long.";
    if (!department) return "Department is required.";

    return null; // No validation errors
  };

  // Handle registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const error = validateInputs();
    if (error) {
      toast.warning(error);
      setIsLoading(false);
      return;
    }

    try {
      const response = await registerApi(userData);

      if (response.status === 200) {
        toast.success("OTP sent successfully.");
        setUserData({
          full_name: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          password: "",
          department: "",
          role: "faculty",
        });
        navigate("/Otp", { state: { email: userData.email } });
      } else {
        toast.error("Registration failed! Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      toast.error(error.response?.data?.error || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="add-user-container">
      <div className="main">
        {/* Section 1: Title */}
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-4">Add Faculty Details</h1>
          </div>
        </div>

        {/* Section 2: Form */}
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <div className="form-container">
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
      </div>
    </div>
  );
}

export default AddTeach;
