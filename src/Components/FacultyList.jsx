import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTeach from './AddTeach';



function FacultyList() {
  const[faculty,setFaculty]=useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();


  return (
    <> 
    <div>
    <div className="container justify-content-center">
      <h1 className="d-flex justify-content-center mt-5 mb-3"> <b><i>Our Faculty</i></b></h1>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addFacultyModal"
          onClick={()=>navigate("/")}
          disabled={isLoading}
        >
          <Link to={AddTeach}><i className="fa-solid fa-plus me-2 text-light">Add Faculty</i></Link>
        </button>
      </div>
      <table className="table table-striped shadow mt-4 border rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Faculty Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Dob</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* <tbody>
            {departments.map((dept, index) => (
              <tr key={dept.id}>
                <td>{index + 1}</td>
                <td>{dept.department_name}</td>
                <td>{dept.description || 'N/A'}</td>
                <td>{dept.courses || 'N/A'}</td>
                <td>
                   <img
                    src={dept.photo ? http://192.168.1.85:8000${dept.photo} : '/default-image.jpg'}
                    alt={dept.department_name}
                    style={{ width: '100px', height: '80px' }}
                    /> 
                  </td>
                  <td>
                    <button className="btn me-3">
                      <i className="fa-solid fa-pen-to-square text-primary"></i>
                    </button>
                    <button className="btn" >
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>     
   
    <ToastContainer />
  </div>
</>
  )
}

export default FacultyList