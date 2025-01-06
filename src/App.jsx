import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import TeachDash from "./Pages/TeachDash";
import StudentDashboard from "./Pages/StudentDashboard";
import Home from "./Pages/Home"; 
import Overview from "./Components/Overview";
import AddUser from "./Components/AddUser";
import AddStudent from "./Components/AddStudent";
import AddTeach from "./Components/AddTeach";
import Hod from "./Pages/Hod";
import AddHod from "./Components/AddHod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Otp from "./Components/Otp";
import CourseDescription from "./Components/CourseDescription";
import AddDepartment from "./Components/AddDepartment";
import FacultyList from "./Components/FacultyList";


function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/teachDash" element={<TeachDash />}></Route>
        <Route path="/studentDash" element={<StudentDashboard />}></Route>
        <Route path="/hodDash" element={<Hod />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Overview" element={<Overview/>}></Route>
        <Route path="/Add" element={<AddUser/>}></Route>
        <Route path="/AddStudent" element={<AddStudent/>}></Route>
        <Route path="/AddTeacher" element={<AddTeach/>}></Route>
        <Route path="/AddHod" element={<AddHod/>}></Route>
        <Route path="/Otp" element={<Otp/>}></Route>
        <Route path="/coursedescription" element={<CourseDescription/>}></Route>
       <Route path="/addDepartment" element={<AddDepartment/>}></Route>
       <Route path="/facultyList" element={<FacultyList/>}></Route>

      </Routes>
      {/* <Footer /> */}
      <ToastContainer/>
    </>
  );
}

export default App;
