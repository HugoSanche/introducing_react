import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateData(e) {
    //destruyendo objecto
    const { name, value } = e.target;

    console.log("nombre " + name);
    console.log("value " + value);
    if (name === "primerNombre") {
      setContact({
        fName: value,
        lName: contact.lName,
        email: contact.email
      });
    }

    if (name === "primerApellido") {
      setContact({
        fName: contact.fName,
        lName: value,
        email: contact.email
      });
    } else if (name === "email") {
      setContact({
        fName: contact.fName,
        lName: contact.lName,
        email: value
      });
    }
    //setContact();
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="primerNombre"
          placeholder="First Name"
          onChange={updateData}
          value={contact.fName}
        />
        <input
          name="primerApellido"
          placeholder="Last Name"
          onChange={updateData}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={updateData}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
