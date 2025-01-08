import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FacultyApi } from '../services/allAPI'; // Ensure this API is correctly implemented


function FacultyList() {
  const [faculty, setFaculty] = useState([]); // To store faculty data
  const [isLoading, setIsLoading] = useState(false); // To manage loading state
  const navigate = useNavigate(); // For navigation

  // Fetch faculty details on component mount
  useEffect(() => {
    const fetchFacultyDetails = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await FacultyApi(); // Call API
        if (response.status === 200 && Array.isArray(response.data)) {
          setFaculty(response.data); // Store data in state
        } else {
          toast.error('Failed to fetch faculty.');
        }
      } catch (err) {
        toast.error('Error fetching faculty.');
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchFacultyDetails();
  }, []);

  // Handle Edit functionality
  const handleEdit = (faculty) => {
    console.log('Editing:', faculty);
    // Redirect to an edit page or show a modal
  };

  // Handle Delete functionality
  const handleDelete = (id) => {
    console.log('Deleting faculty with ID:', id);
    toast.success('Faculty deleted successfully.');
    // Add actual delete logic
  };

  return (
    <>
      <div className="container justify-content-center">
        <h1 className="d-flex justify-content-center mt-5 mb-3">
          <b><i>Our Faculty</i></b>
        </h1>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-success"
            onClick={() => navigate('/AddTeacher')} // Adjust route to your Add Faculty page
            disabled={isLoading}
          >
            <i className="fa-solid fa-plus me-2 text-light"></i>Add Faculty
          </button>
        </div>
        {isLoading ? (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <table className="table table-striped shadow mt-4 border rounded">
            <thead>
              <tr>
                <th>#</th>
                <th>Faculty Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>   
              {faculty.map((fac, index) => (
                <tr key={fac.id}>
                  <td>{index + 1}</td>
                  <td>{fac.full_name || 'N/A'}</td>
                  <td>{fac.email || 'N/A'}</td>
                  <td>{fac.phone || 'N/A'}</td>
                  <td>{fac.dob || 'N/A'}</td>
                  <td>{fac.gender || 'N/A'}</td>
                  <td>{fac.department || 'N/A'}</td>
                  <td>
                    <button className="btn me-3" onClick={() => handleEdit(fac)}>
                      <i className="fa-solid fa-pen-to-square text-primary"></i>
                    </button>
                    <button className="btn" onClick={() => handleDelete(fac.id)}>
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default FacultyList;
