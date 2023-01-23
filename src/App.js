import "./App.css";
import { useState } from "react";
import { Portada } from "./components/Portada";
import { Buscador } from "./components/Buscador";
import { Nav } from "./components/Nav";
import { Spinner } from "./components/Spinner";

function App() {
  const [nextPage, setNextPage] = useState("portada");

  return (
    <div className="App">
      <Nav setNextPage={setNextPage} />
      {nextPage === "portada" ? (
        <Portada nextPage={nextPage} setNextPage={setNextPage} />
      ) : (
        <Buscador setNextPage={setNextPage} />
      )}
      <Spinner />
    </div>
  );
}

export default App;
