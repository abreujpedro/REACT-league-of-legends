import React from "react";

import { IChampTopInterface } from "../../../interfaces/IChampInterface";
import styles from "./CardTopChamp.module.css";

const CardTopChamp: React.FC<IChampTopInterface> = ({
  champName,
  champLane,
  champRate,
  champPicture,
}) => {
  return (
    <div className={styles.cardBackGround}>
      <div>{champPicture}</div>
      <div>
        <h3>{champName}</h3>
        <span>{champLane}</span>
      </div>
      <div>{champRate}</div>
      <div>Botão</div>
    </div>
  );
};

export default CardTopChamp;
