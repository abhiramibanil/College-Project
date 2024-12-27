import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/Navbar";
import TeachDash from "./Pages/TeachDash";
import Footer from "./Components/Footer";
import StudentDashboard from "./Pages/StudentDashboard";
import Landing from "./Components/Landing";
import Home from "./Pages/Home";
import Overview from "./Components/Overview";
import AddUser from "./Components/AddUser";
import AddStudent from "./Components/AddStudent";
import AddTeach from "./Components/AddTeach";
import Hod from "./Pages/Hod";
import AddHod from "./Components/AddHod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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


      </Routes>
      {/* <Footer /> */}
      <ToastContainer/>
    </>
  );
}

export default App;
