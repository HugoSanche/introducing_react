import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleNote(e) {
    let myTitle = e.target.value;
    //console.log(myTitle);
    setNote(myTitle);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleNote}
        />

        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleNote}
        />

        <button
          type="button"
          onClick={() => {
            props.checkClick(note.title, note.content);
            setNote("");
            //setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
