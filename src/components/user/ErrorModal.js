import React from "react";
import "./ErrorModal.css";

// const BackDrop = () => {
//   return <div className="backdrop"/>
// }

// const Overlay = (props) => {
//   return (

//   )
// }

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <div className="errorCont">
        <header>
          <h3>{props.headerTitle}</h3>
        </header>
        <div id="descript">
          <p>{props.description}</p>
          <button onClick={props.onConfirm}>
            <footer>Okay</footer>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ErrorModal}