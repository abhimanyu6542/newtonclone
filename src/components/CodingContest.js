import "./CodingContest.css"
import "./Home.css"
import WinnerCard from "./WinnerCard";

const CodingContest = () => {
    return(
    <>
      <div className="main">
        <div className="codingmaintitle">
        <h1 className="codingTitle"><strong>Newton School Coding Contest</strong></h1>
        <h5 className="subtitle"><strong>India's Premier Coding Challenge</strong></h5>
        <button className="Explore">Register For Contest</button>
        </div>
        <div className="winnercard">
            <WinnerCard />
          </div>
          <div className="desc">
          <h1>Format </h1> 
         <p> 1. <span></span> There will be multiple problems and points would be allotted on solving the problems. Each question may have different points depending on the difficulty level of the problem. </p> 

         <p>2. <span></span> You can sit back in your homes and give this test online. All you need is a good internet connectivity and a quiet environment. </p> 

              <p> 3. <span></span> Eligibility - College students and recent graduates with a knack for Programming. </p>
                <button className="Explore">Register For Contest</button>
            </div>     
      </div>
    
    
    </>)
  };
  export default CodingContest;
  