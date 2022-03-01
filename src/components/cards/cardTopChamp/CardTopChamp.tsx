import React from "react";

import styles from "./CardTopChamp.module.css";

const CardTopChamp: React.FC<{ champName: string; champPicture: string }> = ({
  champName,
  champPicture,
}) => {
  return (
    <div className={styles.cardBackGround}>
      <img src={champPicture} alt={champName} />
      <div className={styles.divContainer}>
        <div className={styles.text}>
          <h3>{champName}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardTopChamp;
