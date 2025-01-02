import React, { useState, useEffect } from "react";
import "./homeinfo.css";
import { departmentApi } from "../services/allAPI";

function HomeInfo() {
  const [courseDataImg] = useState([
    {
      img: "https://aissmscoe.com/wp-content/uploads/2020/09/chemical-engineering-blog.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWJXXocUFAvkbcMf3Wz1VdrGu9kPk7DjO2A&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9IHgKSAAPHj0TIsy5ZmAKhhIX5IDD3VIeQ&s",
    },
    {
      img: "https://media.istockphoto.com/id/1457151572/photo/co-workers-working-on-a-circuit-boards-in-office.jpg?s=612x612&w=0&k=20&c=YrmaZZA_ABMlVMe5MM4IG0OKBUwTjr1IVlFQIvmE_0w=",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6FAQkaSrC4V4eO-dz6Z0k2NvZ5rr1Tgpzw&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy-T1OqWf51RKAxkZmUAOyqJPl-BVCuqEQQ&s",
    },
  ]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await departmentApi();
        console.log("API Response:", response); // Debugging line

        // Extract data from response
        const data = response.data;

        if (Array.isArray(data)) {
          const departmentNames = data.map((dept) => dept.department_name || "Unknown Department");
          setDepartments(departmentNames);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (err) {
        console.error("Error fetching departments:", err);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <>
      <div className="head-course-text">
        <p>Most Popular Courses</p>
      </div>

      <div className="course-box">
        {departments.map((department, index) => (
          <div className="course" key={index}>
            <img
              src={courseDataImg[index]?.img || "https://via.placeholder.com/150"}
              alt="Course"
            />
            <p className="cp1">{department}</p>
            <p className="cp2">
              See Course Guide <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>
        ))}
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
