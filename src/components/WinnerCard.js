import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "./Student.css";



const characters = [
 
  {
    id: 1,
    type: "Title",
    title: "Full Stack",
    des1:"classes",
   
  },
  {
    id: 2,
    type: "Certificate",
    title: "Full Stack",
    des1:"classes",
   
  },
  {
    id: 3,
    type: "Certificate",
    title: "Full Stack",
    des1:"classes",
   
  }
];

const CardListItem = props => {
  return (
    <li>
      <div
        className="card-container"
        style={{
         display:"block",
         alignItem:"center",
         textAlign:"center",
         justifyContent:"center",
          width: "200px",
          height:"200px",
          border: "solid 3px #d3d3d3",
          margin: "10px",
          padding:"10px",
          backgroundColor:"	#808080",
          color:"white",
          borderRadius:"10px"
        }}
      >
        <p>
          {props.character.type}
        </p>
        <h6> <strong>{props.character.title}</strong> </h6>
        <br />
        <br />
        <p className="detail">
        {props.character.des1}</p> 
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

export default function WinnerCard() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}
