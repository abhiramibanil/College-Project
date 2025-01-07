import React from 'react'
import "./AttedSheet.css";


const FacultyAtendence = () => {
    const faculty = [
      { slNo: 1, name: "Jane" },
      { slNo: 2, name: "Smith" },
      { slNo: 3, name: "Emily " },
      { slNo: 4, name: "nath" },
      { slNo: 5, name: "sam" },
      { slNo: 6, name: "AV" },
      
    ];


  return  (
    <>
     <div className="attendance-container">
      <h1>Attendance Sheet</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((faculty) => (
            <tr key={faculty.slNo}>
              <td>{faculty.slNo}</td>
              <td>{faculty.name}</td>
              <td>
                <select className="status-dropdown">
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default FacultyAtendence