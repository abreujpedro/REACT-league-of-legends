import React from "react";

import { IChampInterface } from "../../../interfaces/IChampInterface";

const CardTopChamp: React.FC<IChampInterface> = ({
  champName,
  champLane,
  champRate,
}) => {
  return (
    <div>
      <div></div>
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
