import React from "react";

import Container from "../container/Container";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.divFooter}>
          <p>League of Legends</p>
          <p>GitHub</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
