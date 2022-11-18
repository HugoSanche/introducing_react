import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //const [myTitles, setMyTitles] = useState([]);
  const [myNotas, setMyNotas] = useState({});

  function handleClick(title, nota) {
    //console.log(title);

    setMyNotas((prevNota) => {
      return [...prevNota, nota];
    });
  }

  function deleteNotes(id) {
    console.log(id);
    setMyNotas((prevMyNotas) => {
      return prevMyNotas.filter((titleDelete, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <React.StrictMode>
        <CreateArea checkClick={handleClick} />

        {Object.keys(myNotas).forEach((message, id) => (
          <Note
            llave={id}
            title={message}
            //title="Note title"
            content={myNotas[id]} //Mando el id para identificar la nota asociada al titulo
            deleteNotes={deleteNotes}
          />
        ))}
      </React.StrictMode>
      <Footer />
    </div>
  );
}

export default App;
