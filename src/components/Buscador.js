import "./css/buscador.css";
import { useState } from "react";
import { getData } from "../commonServices";
import { ListaResultados } from "./ListaResultados";
import { Favoritos } from "./Favoritos";

export const Buscador = (like, setLike) => {
  const [lista, setLista] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const HandleBuscador = (e) => {
    e.preventDefault();

    const urlBusqueda = `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}&status=${status}`;
    getData(urlBusqueda, setLista);
  };
  

  return (
    <div>
      <section className="buscador">
        <form onSubmit={HandleBuscador}>
          <label htmlFor="nombre" name="name">
            Nombre:
          </label>
          <input
            id="name"
            name="name"
            value={name}
            className="name-buscador"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
            }}
          >
            <option></option>
            <option>male</option>
            <option>female</option>
            <option>genderless</option>
            <option>unknown</option>
          </select>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option></option>
            <option>alive</option>
            <option>dead</option>
            <option>unknown</option>
          </select>
          <input type="image" src="btnBuscar.png" alt="Submit Form" className="img-submit-search" />
        </form>
      </section>
      <section>
        <h2 className="resultados-h2">Resultados</h2>
        <ListaResultados lista={lista} />
        <Favoritos />
      </section>
    </div>
  );
};
