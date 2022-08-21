import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "./Card.css";



const characters = [
 
  {
    id: 2,
    type: "Certificate Course",
    title: "Full Stack Development",
    des1:" Live online classes",
    des2:"Flexible duration",
    des3:"EMI from ₹5,500*",
    des4:"Salary 8-50 LPA",
    des5:"800+ hiring partners",
    des6:"Fully live classes",
   
  },
  {
    id: 3,
    type: "MIA University, Spain",
    title: "Master's in Computer Science",
    des1:" Live online classes",
    des2:"Dual alumni status",
    des3:"EMI from ₹8,500*",
    des4:"60 ECTS credits",
    des5:"800+ hiring partners",
    des6:"Lifetime placement assistance",
   
  },
  {
    id: 4,
    type: "Pay After Placement",
    title: "Full Stack Development",
    des1:" Live online classes",
    des2:"Soft skills training",
    des3:"1-1 Personal Mentor Session",
    des4:"Salary 5-50 LPA",
    des5:"800+ hiring partners",
    des6:"Pay after placement",
    
  }
];

const CardListItem = props => {
  return (
    <li>
      <div
        className="card-container"
        style={{
         display:"block",
         textAlign:"center",
         justifyContent:"center",
          width: "300px",
          height:"400px",
          border: "solid 3px #d3d3d3",
          margin: "10px",
          padding:"10px",
          backgroundColor:"#4682b4",
          color:"white",
          borderRadius:"10px"

        }}
      >
        <p>
          {props.character.type}
        </p>
        <h2> <strong>{props.character.title}</strong> </h2>
        <br />
        
        <hr />
        <br />
        <p className="detail">
        {props.character.des1}</p> 
       <p className="detail"> {props.character.des2} </p>
        <p className="detail">{props.character.des3} </p>
       <p className="detail"> {props.character.des4}</p> 
        <p className="detail">{props.character.des5} </p> 
       <p className="detail">{props.character.des6}</p> <br />
       <button className="crsbtn">Explore</button>
      </div>
    </li>
  );
};

const CardList = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {characters.map(character => {
        return <CardListItem character={character} key={character.id} />;
      })}
    </ul>
  );
};

export default function CourseCard() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}
