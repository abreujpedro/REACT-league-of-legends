import React, { useContext } from "react";

import GitHubIcon from "../../assets/svg/gitHub";
import { AuthContext } from "../../contexts/auth";
import styles from "./LoginButton.module.css";

const LoginButton: React.FC = () => {
  const { signUrl } = useContext(AuthContext);
  return (
    <a className={styles.linkMain} href={signUrl}>
      <GitHubIcon />
      Entrar
    </a>
  );
};

export default LoginButton;
