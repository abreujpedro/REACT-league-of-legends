import React from "react";

import styles from "./Container.module.css";

const Container: React.FC = ({ children }) => {
  return <div className={styles.div}>{children}</div>;
};

export default Container;
