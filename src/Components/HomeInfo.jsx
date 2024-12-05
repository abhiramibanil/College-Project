import React, { useState } from "react";
import "./homeinfo.css";

function HomeInfo() {
  const [courseData, setCourseData] = useState([
    {
      img: "https://aissmscoe.com/wp-content/uploads/2020/09/chemical-engineering-blog.jpg",
      p1: "Chemical Enineering",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWJXXocUFAvkbcMf3Wz1VdrGu9kPk7DjO2A&s",
      p1: "Computer Enineering",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9IHgKSAAPHj0TIsy5ZmAKhhIX5IDD3VIeQ&s",
      p1: "Civil Enineering",
    },

    {
      img: "https://media.istockphoto.com/id/1457151572/photo/co-workers-working-on-a-circuit-boards-in-office.jpg?s=612x612&w=0&k=20&c=YrmaZZA_ABMlVMe5MM4IG0OKBUwTjr1IVlFQIvmE_0w=",
      p1: "Electronics Enineering",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6FAQkaSrC4V4eO-dz6Z0k2NvZ5rr1Tgpzw&s",
      p1: "Informating Technology",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy-T1OqWf51RKAxkZmUAOyqJPl-BVCuqEQQ&s",
      p1: "ECE Enineering",
    },
  ]);
  return (
    <>
      <div className="head-course-text">
        <p>Most Popular Courses</p>
      </div>

      <div className="course-box">
        {courseData.map((course) => {
          return (
            <div className="course">
              <img src={course.img} alt="" />

              <p className="cp1">{course.p1}</p>
              <p className="cp2">
                See Course Guide <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          );
        })}
      </div>

      <div className="help">
        <img
          src="https://media.istockphoto.com/id/1334437218/video/4k-video-footage-of-a-group-of-scientists-having-a-discussion-in-a-lab.jpg?s=640x640&k=20&c=9DQMmbjbgly1MTE9bYNXElZxNWYt5GyC8PKlwDxLOng="
          alt=""
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
              <i class="fa-regular fa-envelope"></i> Ask a Question
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeInfo;
