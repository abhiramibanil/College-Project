
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { facultyApi, deleteFacultyApi, editFacultyApi } from "../services/allAPI"; // Import the necessary API functions

function FacultyList() {
  const [faculty, setFaculty] = useState([]); // Faculty list state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [selectedFaculty, setSelectedFaculty] = useState(null); // State for selected faculty for editing
  const [updatedDetails, setUpdatedDetails] = useState({}); // State for updated faculty details
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("access"); // Or from localStorage, or from your global state

    const fetchFaculty = async () => {
      setIsLoading(true);
      try {
        // Call the facultyApi function
        const response = await facultyApi(token); // Pass token to facultyApi
        setFaculty(response.data); // Assuming response.data is the faculty list
      } catch (error) {
        console.error("Error fetching faculty data", error);
        toast.error("Failed to fetch faculty data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaculty();
  }, [navigate]);

  // Handle faculty deletion
  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("access");

    try {
      const response = await deleteFacultyApi(id, token); // Call the delete API function
      if (response.status === 204) {
        toast.success("Faculty deleted successfully.");
        // Remove deleted faculty from the list
        setFaculty(faculty.filter((facultyItem) => facultyItem.id !== id));
      } else {
        toast.error("Failed to delete faculty.");
      }
    } catch (error) {
      console.error("Error deleting faculty", error);
      toast.error("Failed to delete faculty.");
    }
  };

  // Handle faculty edit
  const handleEdit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("access");

    // Log updated details to verify the data
    console.log("Sending data for editing:", updatedDetails);

    try {
      const response = await editFacultyApi(selectedFaculty.id, updatedDetails, token);
      if (response.status === 200) {
        toast.success("Faculty updated successfully.");
        setFaculty(
          faculty.map((facultyItem) =>
            facultyItem.id === selectedFaculty.id ? { ...facultyItem, ...updatedDetails } : facultyItem
          )
        );
        setIsModalOpen(false); // Close the modal
      } else {
        console.error("Failed to update faculty:", response.data); // Log response error from server
        toast.error("Failed to update faculty.");
      }
    } catch (error) {
      console.error("Error updating faculty", error.response ? error.response.data : error);
      toast.error("Failed to update faculty.");
    }
  };

  // Open the modal to edit faculty details
  const openEditModal = (facultyItem) => {
    setSelectedFaculty(facultyItem);
    setUpdatedDetails({
      full_name: facultyItem.full_name,
      email: facultyItem.email,
      phone: facultyItem.phone,
      dob: facultyItem.dob,
      gender: facultyItem.gender,
      department: facultyItem.department,
    });
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="mt-5">Our Faculty</h1>

      <div className="d-flex justify-content-end me-5">
        <Link to="/">
          <button className="btn btn-success">Add Faculty</button>
        </Link>
      </div>

      <div className="ms-5 me-5">
        <div className="row g-4 mt-3">
          {faculty.length > 0 ? (
            faculty.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card" style={{ width: "100%" }}>
                  <img
                    src={`http://192.168.1.85:8000${item.photo}`}
                    className="card-img-top"
                    alt={item.full_name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.full_name}</h5>
                    <p className="card-text">
                      <strong>Email:</strong> {item.email} <br />
                      <strong>Phone:</strong> {item.phone} <br />
                      <strong>DOB:</strong> {item.dob} <br />
                      <strong>Gender:</strong> {item.gender} <br />
                      <strong>Department:</strong> {item.department}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" onClick={() => openEditModal(item)}>
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </button>
                      <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                        <i className="fa-solid fa-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">{isLoading ? "Loading..." : "No faculty available."}</div>
          )}
        </div>
      </div>

      {/* Bootstrap Modal for Editing Faculty */}
      <div className={`modal fade ${isModalOpen ? "show" : ""}`} style={{ display: isModalOpen ? "block" : "none" }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isModalOpen}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Faculty</h5>
              <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleEdit}>
                <div className="mb-3">
                  <label htmlFor="full_name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="full_name"
                    value={updatedDetails.full_name}
                    onChange={(e) => setUpdatedDetails({ ...updatedDetails, full_name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={updatedDetails.email}
                    onChange={(e) => setUpdatedDetails({ ...updatedDetails, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={updatedDetails.phone}
                    onChange={(e) => setUpdatedDetails({ ...updatedDetails, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    value={updatedDetails.dob}
                    onChange={(e) => setUpdatedDetails({ ...updatedDetails, dob: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    className="form-control"
                    id="gender"
                    value={updatedDetails.gender}
                    onChange={(e) => setUpdatedDetails({ ...updatedDetails, gender: e.target.value })}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    id="department"
                    value={updatedDetails.department}
                    onChange={(e) => setUpdatedDetails({ ...updatedDetails, department: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>

  );
}

export default FacultyList;
