import React from "react";

import styles from "./Container.module.css";

const Container: React.FC = ({ children }) => {
  return (
    <div className={styles.div}>
      <div className={styles.divCh}>{children}</div>
    </div>
  );
};

export default Container;
