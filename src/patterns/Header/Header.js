import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import "./Header.scss";

const Header = () => {
  const [menuAtivar, setMenuAtivar] = React.useState(false);
  return (
    <header>
      <nav>
        <Link to="/" aria-label="Home">
          <Logo styleComponents="logo" />
        </Link>
        <button
          data-menu="button"
          className={menuAtivar ? "menuMobile active" : "menuMobile"}
          onClick={() => setMenuAtivar(!menuAtivar)}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>

        <ul className={menuAtivar ? "active" : ""}>
          <li>
            <Link to="/" className="linkEffect" aria-label="Comprar">
              Comprar
            </Link>
          </li>
          <li>
            <Link to="/" className="linkEffect" aria-label="Vender">
              Vender
            </Link>
          </li>
          <li>
            <Link to="/" className="linkEffect" aria-label="Serviços">
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/" className="linkEffect" aria-label="Ajuda">
              Ajuda
            </Link>
          </li>
          <li>
            <Link to="/" className="linkEffect" aria-label="Entrar">
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
