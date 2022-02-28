import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";
import Container from "../container/Container";
import LoginButton from "../login/LoginButton";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { userContext, isLogged, signOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexItemContainer}>
          <nav className={styles.nav}>
            <NavLink to="/" className={pathname === "/" ? styles.aActive : ""}>
              Home
            </NavLink>
            <NavLink
              to="/champs"
              className={pathname === "/champs" ? styles.aActive : ""}
            >
              Campeões
            </NavLink>
            <NavLink
              to="/favoriteschamps"
              className={pathname === "/favoriteschamps" ? styles.aActive : ""}
            >
              Campões favoritos
            </NavLink>
          </nav>
          <div>
            {isLogged ? (
              <div className={styles.profileDiv}>
                <div className={styles.profilePicture}>
                  <img src={userContext?.avatar_url} alt="Logo" />
                </div>
                <button className={styles.logOutBtn} onClick={() => signOut()}>
                  deslogar
                </button>
              </div>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
