import React from "react";

import { IBasicChampInterface } from "../../../interfaces/IChampInterface";

const CardChamps: React.FC<IBasicChampInterface> = ({
  champName,
  champPicture,
}) => {
  return (
    <div>
      <div>{champPicture}</div>
      <div>
        <h2>{champName}</h2>
      </div>
    </div>
  );
};

export default CardChamps;
