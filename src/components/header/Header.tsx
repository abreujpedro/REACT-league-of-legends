import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";
import Container from "../container/Container";
import LoginButton from "../login/LoginButton";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { userContext, isLogged } = useContext(AuthContext);
  console.log(isLogged);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexItemContainer}>
          <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/champs">Campeões</NavLink>
            <NavLink to="/favoriteschamps">Campões favoritos</NavLink>
          </nav>
          <div>{isLogged ? userContext?.login : <LoginButton />}</div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
