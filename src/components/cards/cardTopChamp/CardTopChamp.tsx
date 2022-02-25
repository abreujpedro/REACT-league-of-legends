import React from "react";

import { IChampTopInterface } from "../../../interfaces/IChampInterface";

const CardTopChamp: React.FC<IChampTopInterface> = ({
  champName,
  champLane,
  champRate,
  champPicture,
}) => {
  return (
    <div>
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
