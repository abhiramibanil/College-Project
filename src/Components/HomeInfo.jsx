import React, { useState, useEffect } from "react";
import "./homeinfo.css";
import { departmentApi } from "../services/allAPI";

function HomeInfo() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await departmentApi();
        if (response.status === 200 && Array.isArray(response.data)) {
          setDepartments(response.data); // Only set if it's a valid array
        } else {
          setError("Failed to fetch departments data.");
        }
      } catch (err) {
        setError("Error fetching departments: " + err.message); // Set error message
        console.error("Error fetching departments:", err);
      } finally {
        setLoading(false); // Turn off loading
      }
    };

    fetchDepartments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  if (!departments || departments.length === 0) {
    return <div>No departments available.</div>; // Fallback if no departments
  }

  return (
    <>
      <div className="head-course-text">
        <p>Most Popular Courses</p>
      </div>

      <div className="course-box">
        {departments.map((department, index) => {
          const imageUrl = department.photo; // Assuming the response contains photo URL

          return (
            <div className="course hover-effect" key={index}>
              <div>
                <img
                  style={{ width: '330px', height: '220px' }}
                  src={`http://192.168.1.85:8000${imageUrl}`}
                  alt={department.department_name}
                />
              </div>
              <p className="cp1">{department.department_name}</p>
              <p className="text-warning">
                See Course Guide <i className="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          );
        })}
      </div>

      <div className="help">
        <img
          src="https://media.istockphoto.com/id/1334437218/video/4k-video-footage-of-a-group-of-scientists-having-a-discussion-in-a-lab.jpg?s=640x640&k=20&c=9DQMmbjbgly1MTE9bYNXElZxNWYt5GyC8PKlwDxLOng="
          alt="Help"
        />
        <div className="help-text">
          <p className="ht-1">We're here to help</p>
          <p className="ht-2">
            Read through our FAQs and, if you can't find what you're looking
            for, our experts will be happy to answer your questions.
          </p>
          <div className="ht-box">
            <button className="re-faq">READ FAQ</button>
            <p>
              <i className="fa-regular fa-envelope"></i> Ask a Question
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
