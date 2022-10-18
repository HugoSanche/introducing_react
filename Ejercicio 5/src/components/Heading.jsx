import React from "react";

const currentTime = new Date().getHours;

const customStyle = {
  color: "red",
  fontSize: "20px"
};

let mensage = String;

mensajeOfDay(currentTime);
function mensajeOfDay(currentTime) {
  if (currentTime < 12) {
    mensage = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 16) {
    mensage = "Good Afternoon";
    customStyle.color = "green";
  } else {
    mensage = "Good Evening";
    customStyle.color = "blue";
  }
}
function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {mensage}
    </h1>
  );
}

export default Heading;
