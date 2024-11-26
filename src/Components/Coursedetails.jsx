import React from 'react'
import "./Coursedetails.css";
function Coursedetails() {
  return (
    <>
    <div className='c-1 shadow '>
    <div className='co'>
        <h2 className='ca'> <i class="fa-solid fa-file"></i>    Course Schedule</h2> </div>
        <div cd-1>
        <p class="description">
          This course schedule provides a thorough list of weekly topics, readings, assignments, and exams.
        </p>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Dates</th>
                    <th>Type</th>
                    <th>Topic</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Week 1</td>
                    <td>September 16, 2019 → September 20, 2019</td>
                    <td><span class="badge lesson">Module I</span></td>
                    <td>HTML,CSS</td>
                </tr>
                <tr>
                    <td>Week 2</td>
                    <td>September 23, 2019 → September 27, 2019</td>
                    <td><span class="badge lesson">Module II</span></td>
                    <td>Javascript</td>
                </tr>
                <tr>
                    <td> Week 3</td>
                    <td>September 30, 2019 → October 4, 2019</td>
                    <td><span class="badge lesson">Module III</span></td>
                    <td>API</td>
                </tr>
                <tr>
                    <td> Essay #1</td>
                    <td>October 2, 2019</td>
                    <td><span class="badge assignment">Assignment</span></td>
                    <td>REVISION</td>
                </tr>
                <tr>
                    <td>Midterm #1</td>
                    <td>October 17, 2019</td>
                    <td><span class="badge exam">Exam</span></td>
                    <td>Module I,II,III</td>
                </tr>
            </tbody>
        </table>
    </div>
        </div>
    
    </>
  )
}

export default Coursedetails