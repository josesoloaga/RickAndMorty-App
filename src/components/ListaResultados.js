import "./css/listaResultados.css";
import { Card } from "./Card";

export const ListaResultados = (props) => {
  const { lista } = props;

  if (lista.length <= 0) {
    return (
      <div className="div-sin-resul">
        <h4 className="sin-resultados">No hay resultados de busqueda</h4>
      </div>
    );
  } else {
    return (
      <ul className="lista-resultados">
        {lista.map((personaje, index) => {
          return <Card personaje={personaje} indexP={index} key={`${personaje.name}${index}`}/>;
        })}
      </ul>
    );
  }
};
