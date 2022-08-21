import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CodingContest from "./components/CodingContest";
import Lunchpad from "./components/Lunchpad";
import HireFromUs from "./components/HireFromUs";
import Home from "./components/Home";


export default function App() {
  return (
   <>
    <div className="App">
      <ul className="navbar">
        <li><Link id="logo" to="/"><span id="newton">Newton</span>  <span id="school">School</span></Link></li>
        <li><Link className="listitem" to="/codingcontest"> Coding Contest</Link></li>
        <li><Link className="listitem" to="/lunchpad"> Lunchpad</Link></li>
        <li><Link className="listitem" to="/hirefromus"> Hire from Us</Link></li>
        <li><Link  id="login" to="/lunchpad"> Login</Link></li>
        <li><Link id="signup" to="/lunchpad"> Sign Up</Link></li>
      
      </ul>

     
    

      <Routes>
        <Route path="/lunchpad" element={<Lunchpad />} />
        <Route path="/" element={<Home />} />
        <Route path="/codingcontest" element={<CodingContest />} />
        <Route path="/hirefromus" element={<HireFromUs />} />
      </Routes>
    </div>
    <footer className="main-footer">
      <div className="fname">
        <h1>Newton <span>School</span></h1>
       <p>Newton School is a platform to learn and develop skills that you need for your best Tech career. We boost up your skills and prepare you for your dream job. </p> 
       <br /> <br />
       <p>
       We are dedicated to build and structure your tech career for the dream companies worldwide based on your skills, eligibility, preferences and work hard with you till you get into one of yours.
       </p>
      </div>
      <div className="link">
            
        <ul>
         <li className="crshead"><h3>Company</h3></li> 
          
          <li>About Us</li>
          <li>Pay After Placement</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>Term & Condition</li>
        </ul>
      </div>
      <div className="link">

        <ul>
           <li className="crshead"><h3>Course Offered</h3></li>
          <li>About Us</li>
          <li>Pay After Placement</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>Term & Condition</li>
        </ul>
      </div>
    </footer>
    <hr />
    <footer className="child-footer">

      <h3>@ Copyright 2022 <br />
       All Right Reserved </h3>
       <h4>This Webpage Developed By Abhimanyu Debata</h4>
    </footer>
  </>
 );
}
