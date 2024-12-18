import React from 'react'
import './AddUser.css';

function AddUser() {
    return (

        <div className="add-user-container">
            

            <div className="main">
                <div className="form-container">
                    <h1>Add User</h1>
                    <form>
                        <select class="form-control form-select mb-3" aria-label="Large select example">
                            <option selected>Select option</option>
                            <option value="1">Student</option>
                            <option value="2">Faculty</option>
                            <option value="3">HOD</option>
                        </select>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};



export default AddUser