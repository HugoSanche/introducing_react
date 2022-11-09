
function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  const [name, setName] = useState("");
  const [nameHead, setNameHead] = useState("");

  function handleClick(event) {
    setName(event.target.value);
  }

  function handleClickb(event) {
    setNameHead(name);
    event.preventDefault(); //Evita que se refresque la pagina //prevent to refresh the page
  }

  function handleMouseOver() {
    setMouseOver(true);
    //  console.log("Hola");
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hola {nameHead}</h1>

      <form onSubmit={handleClickb}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleClick}
          name={name}
        />

        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          id="btn"
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
