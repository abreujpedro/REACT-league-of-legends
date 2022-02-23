import React from "react";

interface ICardAttributes {
  champName: string;
  champLane: string;
  champCategory: string;
  champRate: number;
}

const CardTopChamp: React.FC<ICardAttributes> = ({
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
