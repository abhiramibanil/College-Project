import React, { useState } from 'react';

function ProfileEdit() {
  const [profilePicture, setProfilePicture] = useState(
    'https://plus.unsplash.com/premium_photo-1683141506839-c8a751f227b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [department, setDepartment] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    alert('Changes canceled.');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#347474' }}
    >
      <div
        style={{ width: '800px', borderRadius: '10px' ,backgroundColor: '#cbf078'}}
        className="p-4 shadow "
      >
        <h3 className="fw-bolder text-primary text-center mb-4">
          Update Your Details
        </h3>
        <div className="row">
          {/* Section 1 */}
          <div className="col-md-6 d-flex flex-column align-items-center">
            <label className="text-center">
              <h5>Change Your Profile Picture</h5>
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                id="profile-picture-input"
              />
              <img
                width="120px"
                height="120px"
                src={profilePicture}
                alt="Profile"
                onClick={() =>
                  document.getElementById('profile-picture-input').click()
                }
                className="rounded-circle cursor-pointer mb-3"
                style={{ objectFit: 'cover', border: '2px solid #ddd' }}
              />
            </label>
            <div className="w-100">
              <label className="mt-3 w-100">
                Update Your Name
                <input
                  placeholder="Change Your Name"
                  type="text"
                  className="form-control mb-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="w-100">
              <label className="mt-3 w-100">
                Update Your Email
                <input
                  placeholder="Change Your Email"
                  type="email"
                  className="form-control mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Section 2 */}
          <div className="col-md-6">
            <div>
              <label className="p-1 w-100">
                Update Your Password
                <input
                  placeholder="Password"
                  type="password"
                  className="form-control mb-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label className="p-1 w-100">
                Update Your Phone Number
                <input
                  placeholder="Phone Number"
                  type="text"
                  className="form-control mb-2"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label className="p-1 w-100">
                Update Your Department
                <input
                  placeholder="Department"
                  type="text"
                  className="form-control mb-2"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </label>
            </div>
            
          </div>
        </div>

        
        <div className="d-flex justify-content-evenly mt-4">
          <button className="btn btn-success" onClick={handleSubmit}>
            Update
          </button>
          <button className="btn btn-warning" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
