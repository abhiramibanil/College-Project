import React from "react";
import "./AttedSheet.css";

const AttendanceSheet = () => {
  const students = [
    { rollNumber: 1, name: "John Doe" },
    { rollNumber: 2, name: "Jane Smith" },
    { rollNumber: 3, name: "Emily Johnson" },
    { rollNumber: 4, name: "Trilok Nath" },
    { rollNumber: 5, name: "Rhithika AV" },
    { rollNumber: 6, name: "Rhikvedh AV" },
    // Add more students here
  ];

  return (
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
          {students.map((student) => (
            <tr key={student.rollNumber}>
              <td>{student.rollNumber}</td>
              <td>{student.name}</td>
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
  );
};

export default AttendanceSheet;
