import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/Navbar";
import TeachDash from "./Pages/TeachDash";

import Footer from "./Components/Footer";
import StudentDashboard from "./Pages/StudentDashboard";
import Landing from "./Components/Landing";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/teachDash" element={<TeachDash />}></Route>
        <Route path="/studentDash" element={<StudentDashboard />}></Route>
        <Route path="/home" element={<Landing />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
