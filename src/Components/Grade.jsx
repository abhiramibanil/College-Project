import React from "react";
import "./grade.css";

function Grade() {
  return (
    <>
      <table>
        <tr className="ghead">
          <th>SI no</th>
          <th>Sub Name</th>
          <th>Staff Name</th>
          <th>Mark</th>
          <th>Review</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Math</td>
          <td>Jack</td>
          <td>78</td>
          <td className="tdr-p">Pass</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Math</td>
          <td>Jack</td>
          <td>78</td>
          <td className="tdr-y">Average</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Math</td>
          <td>Jack</td>
          <td>78</td>
          <td className="tdr-r">Fail</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Math</td>
          <td>Jack</td>
          <td>78</td>
          <td className="tdr-p">pass</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Math</td>
          <td>Jack</td>
          <td>78</td>
          <td className="tdr-r">Fail</td>
        </tr>
      </table>
    </>
  );
}

export default Grade;