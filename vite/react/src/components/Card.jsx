import React from 'react';
import pic1 from "../images/aa.jpg";
import pic2 from "../images/abes.jpg";
import "./Card.css";

const Card = (props) => {
  return (
    
    <div className="card">
      <h2>{props.name}</h2>
      <img src = {props.pic} alt = "React Logo" id  = "img"></img>
      <h2>{props.roll}</h2>
      </div>
    
  );
};

export default Card