//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";
const fName = "Hugo";
const lName = "Sanchez";

const year = new Date();

ReactDOM.render(
  <div>
    <p>Created by {fName + " " + lName}</p>
    <p>CopyRight: {year.getFullYear}</p>
  </div>,
  document.getElementById("root")
);
