import React from "react";

import { IBasicChampInterface } from "../../../interfaces/IChampInterface";
import styles from "./CardChamps.module.css";

const CardChamps: React.FC<IBasicChampInterface> = ({
  champName,
  champPicture,
}) => {
  return (
    <div className={styles.cardDiv}>
      <div className={styles.imgDiv}>
        <img src={champPicture} alt={champName} />
      </div>
      <div className={styles.textDiv}>
        <h2>{champName}</h2>
      </div>
    </div>
  );
};

export default CardChamps;
