import React from "react";
import "./assign.css";

function Assignment() {
  return (
    <>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Subject Name</th>
              <th>Content</th>
              <th>Download</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>OOPS</td>
              <td>Complete a Data Structure assignment...</td>
              <td>
                <button className="btn download-btn">Download</button>
              </td>
              <td>
                <label className="file-upload i">
                  <input type="file" />
                  <span className="upload-text">Upload</span>
                </label>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>OOPS</td>
              <td>Complete a Data Structure assignment...</td>
              <td>
                <button className="btn download-btn">Download</button>
              </td>
              <td>
                <label className="file-upload i">
                  <input type="file" />
                  <span className="upload-text">Upload</span>
                </label>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>OOPS</td>
              <td>Complete a Data Structure assignment...</td>
              <td>
                <button className="btn download-btn">Download</button>
              </td>
              <td>
                <label className="file-upload i">
                  <input type="file" />
                  <span className="upload-text">Upload</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Assignment;