import React from "react";
import "./UserDisplay.css"
// import { Card } from "../UI/Card";

const UserDisplay = (props) => {
  return (
    <div className="container">
      <div className="lists">
          {props.users.map((user, index) => (
             <h2> {user.name} ({user.age} Years Old) </h2>   
          ))}
      </div>
    </div>
  );
};

export { UserDisplay };
