import "./App.css";
import { Portada } from "./components/Portada";
import { Buscador } from "./components/Buscador";
import { Nav } from "./components/Nav";
import { Spinner } from "./components/Spinner";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

        <Routes>
          <Route path="/" element={<Portada />}></Route>
          <Route path="/search" element={<Buscador />}></Route>
        </Routes>

      <Spinner />
    </div>
  );
}

export default App;
