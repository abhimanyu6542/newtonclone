
import CourseCard from "./CourseCard";
import "./Home.css"
import StudentCard from "./StudentCard";


export default function Home() {

  
  return (
<>
   
    <div className="head">
        <div className="para">
             <p><span>Revolutionise your</span>  <br /> <span>Tech Career.</span></p>
             <br />
             <p id="lpa">
                Build a sustainable Tech Career <br />
                 and earn ₹ 5-40 LPA
             </p>
             <br />
             <button className="Explore">Explore</button>
        </div>
          

        <div className="image">
            <img src="https://static.wixstatic.com/media/11062b_3cf02035d8c14ccb9530f8290249600c~mv2.jpeg/v1/crop/x_2381,y_0,w_3379,h_3840/fill/w_458,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Working%20Woman.jpeg" alt="" />
        </div>
    
    </div>
 <h1>Newton School Students work at top companies</h1>
    <div className="company"><img src="https://static.wixstatic.com/media/d30e64_64559f092c11473bb892bf69e025077c~mv2.png/v1/crop/x_4,y_94,w_3956,h_794/fill/w_1309,h_263,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LinkedIn%20Banner%20IT%20Consultant.png" alt="" />
    </div>


      <div className="head">
      <div className="image">
            <img src="https://static.wixstatic.com/media/d30e64_eacfc9acf5084509ba4b72f88159badd~mv2.png/v1/fill/w_493,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design-2.png" alt="" />
        </div>
        <div className="para">
            <h1>1500+</h1>
            <br />

             <p><span>Students already placed.</span></p>

             <br />
             <h6>Newton School Students earn <br />
              80+ Crores cumulative salary.</h6>
             <p id="lpa">
                 </p>
            </div>
         </div> 
         <div className="crstitle">
            <p>EXPLORE OUR OFFERINGS</p>
            <br />
            <h1> <strong> Unlimited learning <br />
                Assured outcomes</strong></h1>
        </div>

        <div className="card">
            <CourseCard />
        </div> 
        <div className="card">
            <StudentCard />
        </div>

  </>
 );
 }
