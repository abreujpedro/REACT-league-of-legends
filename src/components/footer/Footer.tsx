import React from "react";

import GitHubIcon from "../../assets/svg/gitHub";
import LinkedinIcon from "../../assets/svg/linkedin";
import Container from "../container/Container";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.divFooter}>
          <span>Redes sociais</span>
          <a
            href="https://www.linkedin.com/in/joao-pedro-della-bianca/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/abreujpedro"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
