import React from "react";

function Note(props) {
  return (
    <div className="note" key={props.llave}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button type="button" onClick={() => props.deleteNotes(props.llave)}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
