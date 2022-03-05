import React from "react";

import styles from "./CardChamps.module.css";

const CardChamps: React.FC<{ name: string; pictureUrl: string }> = ({
  name,
  pictureUrl,
}) => {
  return (
    <div className={styles.cardDiv}>
      <div className={styles.imgDiv}>
        <img src={pictureUrl} alt={name} />
      </div>
      <div className={styles.textDiv}>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CardChamps;
