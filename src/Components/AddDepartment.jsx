import React, { useEffect, useState } from 'react';
import { departmentApi, addDepartmentApi, deleteDeptApi, editDeptApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'bootstrap'; // Import Bootstrap Modal

function AddDepartment() {
  const [departments, setDepartments] = useState([]);
  const [modalData, setModalData] = useState({
    id: '',
    department_name: '',
    description: '',
    courses: '',
    photo: '', // Will be a string for URL or File object for new uploads
  });
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false); // Flag to check if in edit mode

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await departmentApi();
        if (response.status === 200 && Array.isArray(response.data)) {
          setDepartments(response.data);
        } else {
          toast.error('Failed to fetch departments.');
        }
      } catch (err) {
        toast.error('Error fetching departments.');
      }
    };

    fetchDepartments();
  }, []);

  const handleInputChange = (e) => {
    setModalData({ ...modalData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setModalData({ ...modalData, photo: e.target.files[0] });
  };

  const validateInputs = () => {
    const { department_name, description, courses, photo } = modalData;
    if (!department_name || !description || !courses || !photo) {
      toast.error('All fields are required, including the photo.');
      return false;
    }
    return true;
  };

  const handleAddDepartment = async () => {
    if (!validateInputs()) return;

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
    formData.append('courses', modalData.courses);
    formData.append('photo', modalData.photo);

    try {
      const response = await addDepartmentApi(formData, {
        Authorization: `Bearer ${token}`,
      });

      if (response.status === 200) {
        toast.success('Department added successfully!');
        setDepartments([...departments, response.data]);
        setModalData({
          department_name: '',
          description: '',
          courses: '',
          photo: '',
        });

        // Close the modal programmatically
        const modal = new Modal(document.getElementById('addDepartmentModal'));
        modal.hide();
      } else {
        toast.error('Failed to add department. Please try again.');
      }
    } catch (err) {
      toast.error('Error occurred while adding the department.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditDepartment = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    const token = sessionStorage.getItem('access');

    if (!token) {
      toast.error('No access token found. Please log in.');
      setLoading(false);
      return;
    }

    const updatedDetails = new FormData();
    updatedDetails.append('department_name', modalData.department_name);
    updatedDetails.append('description', modalData.description);
    updatedDetails.append('courses', modalData.courses);
    updatedDetails.append('photo', modalData.photo);

    try {
      const response = await editDeptApi(modalData.id, updatedDetails, token);

      if (response.status === 200) {
        toast.success('Department updated successfully!');
        const updatedDepartments = departments.map((dept) =>
          dept.id === modalData.id ? response.data : dept
        );
        setDepartments(updatedDepartments);
        setModalData({
          department_name: '',
          description: '',
          courses: '',
          photo: '',
        });
        setIsEdit(false); // Close edit modal

        // Close the modal programmatically
        const modal = new Modal(document.getElementById('editDepartmentModal'));
        modal.hide();
      } else {
        toast.error('Failed to update department. Please try again.');
      }
    } catch (err) {
      toast.error('Error occurred while updating the department.');
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (dept) => {
    setModalData({
      id: dept.id,
      department_name: dept.department_name,
      description: dept.description || '',
      courses: dept.courses || '',
      photo: dept.photo || '', // Set photo URL for current department
    });
    setIsEdit(true); // Open edit modal
  };

  const handleDeleteDepartment = async (id) => {
    // Add delete logic here if needed
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
            onClick={() => setIsEdit(false)} // Open add department modal
          >
            <i className="fa-solid fa-plus me-2"></i>Add Department
          </button>
        </div>
        <table className="table table-striped shadow mt-4 border rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Department Name</th>
              <th>Description</th>
              <th>Courses</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, index) => (
              <tr key={dept.id}>
                <td>{index + 1}</td>
                <td>{dept.department_name}</td>
                <td>{dept.description || 'N/A'}</td>
                <td>{dept.courses || 'N/A'}</td>
                <td>
                  <img
                    src={dept.photo ? `http://192.168.1.85:8000${dept.photo}` : '/default-image.jpg'}
                    alt={dept.department_name}
                    style={{ width: '100px', height: '80px' }}
                  />
                </td>
                <td>
                  <button
                    className="btn me-3"
                    onClick={() => openEditModal(dept)}
                    data-bs-toggle="modal"
                    data-bs-target="#editDepartmentModal"
                  >
                    <i className="fa-solid fa-pen-to-square text-primary"></i>
                  </button>
                  <button className="btn" onClick={() => handleDeleteDepartment(dept.id)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label>Department Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="department_name"
                    value={modalData.department_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={modalData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label>Courses</label>
                  <input
                    type="text"
                    className="form-control"
                    name="courses"
                    value={modalData.courses}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Department Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={handleAddDepartment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Add Department'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Department Modal */}
      <div
        className="modal fade"
        id="editDepartmentModal"
        tabIndex="-1"
        aria-labelledby="editDepartmentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editDepartmentModalLabel">
                Edit Department
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label>Department Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="department_name"
                    value={modalData.department_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={modalData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label>Courses</label>
                  <input
                    type="text"
                    className="form-control"
                    name="courses"
                    value={modalData.courses}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Show current image in the edit modal */}
                <div className="mb-3">
                  <label>Current Department Image</label>
                  <div>
                    {modalData.photo && typeof modalData.photo === 'string' ? (
                      <div>
                        <img
                          src={`http://127.0.0.1:8000${modalData.photo}`}
                          alt="Current department"
                          style={{ width: '100px', height: '80px', objectFit: 'cover' }}
                        />
                        <p>{modalData.photo.split('/').pop()}</p> {/* Show file name */}
                      </div>
                    ) : (
                      <div>
                        <p>{modalData.photo?.name || 'No image selected'}</p> {/* Show file name */}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label>Change Department Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={handleEditDepartment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Update Department'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDepartment;
