import "./css/nav.css";

export const Nav = (props) => {
  const { setNextPage } = props;
  return (
    <nav>
      <ul>
        <li>
          <h3
            onClick={() => {
              setNextPage("portada");
            }}
          >
            Portada
          </h3>
        </li>
        <li>
          <h3
            onClick={() => {
              setNextPage("buscador");
            }}
          >
            Buscador
          </h3>
        </li>
      </ul>
          <img src="ricklogo.png" alt="logo.img" className="foto-logo"/>     
    </nav>
  );
};
