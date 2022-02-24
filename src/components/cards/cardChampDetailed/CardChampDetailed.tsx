import React from "react";

import { IChampInterface } from "../../../interfaces/IChampInterface";

const CardChampDetailed: React.FC<IChampInterface> = ({
  champPicture,
  champName,
  champLane,
  champDescription,
}) => {
  return (
    <div>
      <div>{champPicture}</div>
      <div>
        <div>{champName}</div>
        <div>
          <div>{champLane}</div>
          <div>{champDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default CardChampDetailed;
