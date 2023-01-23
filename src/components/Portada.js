import "./css/portada.css";

export const Portada = (props) => {
  const { setNextPage } = props;

  return (
    <div className="portada">
      <p className="nombre-creador">Jose Soloaga©️</p>
      <h1>App</h1>
      <img className="img-portada" src="rickportada.jpg" alt="FotoPortada" onClick={(e) => setNextPage("buscador")} />
      <p>Proyecto de práctica realizado con Rick and Morty API:</p>
      <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>
    </div>
  );
};
