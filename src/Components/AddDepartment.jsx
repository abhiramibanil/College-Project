import React, { useEffect, useState } from 'react';
import { departmentApi, addDepartmentApi, deleteDeptApi } from '../services/allAPI'; // Import deleteDeptApi
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function AddDepartment() {
  const [departments, setDepartments] = useState([]);
  const [modalData, setModalData] = useState({
    department_name: '',
    description: '',
    courses: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);

  // Fetch departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await departmentApi();
        if (response.status === 200 && Array.isArray(response.data)) {
          setDepartments(response.data);
          console.log(response.data);
        } else {
          console.error('Failed to fetch department data.');
        }
      } catch (err) {
        console.error('Error:', err.message);
      }
    };

    fetchDepartments();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    setModalData({ ...modalData, [e.target.name]: e.target.value });
  };

  // Handle image file changes
  const handleFileChange = (e) => {
    setModalData({ ...modalData, image: e.target.files[0] });
  };

  // Handle adding a new department
  const handleAddDepartment = async () => {
    setLoading(true);

    const token = sessionStorage.getItem('access');

    if (!token) {
      toast.error('No access token found. Please log in.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('department_name', modalData.department_name);
    formData.append('description', modalData.description);

    const coursesValue = Array.isArray(modalData.courses)
      ? modalData.courses.join(', ')
      : modalData.courses;
    formData.append('courses', coursesValue);

    if (modalData.image) {
      formData.append('image', modalData.image);
    }

    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const response = await addDepartmentApi(formData, reqHeader);

      if (response.status === 200) {
        toast.success('Department added successfully!');
        setDepartments([...departments, response.data]);
        setModalData({
          department_name: '',
          description: '',
          courses: '',
          image: null,
        });
      } else {
        toast.error('Failed to add department. Please try again.');
      }
    } catch (err) {
      toast.error('Error occurred while adding the department.');
      console.error('Add Department Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a department
  const handleDeleteDepartment = async (id) => {
    try {
      const response = await deleteDeptApi(id);
      if (response.status === 200) {
        toast.success('Department deleted successfully!');
        setDepartments(departments.filter(dept => dept.id !== id));
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Unauthorized! Please log in again.');
        // Redirect to login if needed
      } else {
        toast.error('Failed to delete department.');
      }
    }
  };

  return (
    <div>
      <div className="container justify-content-center">
        <h2 className="d-flex justify-content-center mt-5">Departments</h2>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#addDepartmentModal"
          >
            <i className="fa-solid fa-plus me-2"></i>Add Department
          </button>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <table className="table table-striped shadow mt-4 border rounded">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Department Name</th>
                  <th>Description</th>
                  <th>Courses</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => (
                  <tr key={department.id}>
                    <td>{index + 1}</td>
                    <td>{department.department_name}</td>
                    <td>{department.description || 'N/A'}</td>
                    <td>{department.courses || 'N/A'}</td>
                    <td>
                      <img
                        src={
                          department.photo
                            ? `http://192.168.1.85:8000${department.photo}`
                            : '/default-image.jpg'
                        }
                        alt={department.department_name}
                        style={{ width: '100px', height: '80px' }}
                      />
                    </td>
                    <td>
                      <button className="btn me-3">
                        <i className="fa-solid fa-pen-to-square text-primary"></i>
                      </button>
                      <button
                        className="btn"
                        onClick={() => handleDeleteDepartment(department.id)}
                      >
                        <i className="fa-solid fa-trash text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Add Department Modal */}
      <div
        className="modal fade"
        id="addDepartmentModal"
        tabIndex="-1"
        aria-labelledby="addDepartmentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addDepartmentModalLabel">
                Add Department
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Department Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="department_name"
                    value={modalData.department_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={modalData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Courses</label>
                  <input
                    type="text"
                    className="form-control"
                    name="courses"
                    value={modalData.courses}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Department Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    onChange={handleFileChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddDepartment}
                data-bs-dismiss="modal"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Department'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AddDepartment;
