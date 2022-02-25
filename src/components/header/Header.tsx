import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../container/Container";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  // TODO RECIVE DATA ABOUT LOGIN FROM API
  const [isLogged, setIsLogged] = React.useState<boolean | null>(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexItemContainer}>
          <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/champs">Campeões</NavLink>
            <NavLink to="/favoriteschamps">Campões favoritos</NavLink>
          </nav>
          <div>{isLogged ? "logado" : "deslogado"}</div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
