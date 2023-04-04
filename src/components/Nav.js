import "./css/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Portada</Link>
        </li>
        <li><Link to='/search'>Buscador</Link>
        </li>
      </ul>
      <img src="ricklogo.png" alt="logo.img" className="foto-logo" />
    </nav>
  );
};
