import React from "react";
import { data } from "../../../data";
// function name must must start with capital letter BdayCard not bdayCard
const BdayCard = () => {
  const [People, setPeople] = React.useState(data);

  const remList = () => {
    setPeople([]);
  };
  return (
    <>
      <div className="w-bg">
        {People.map((person) => {
          const { id, name } = person;
          return (
            <div>
              <h2 className="item">{name}</h2>
            </div>
          );
        })}
        <button className="btn" onClick={remList}>
          Click here to Remove list
        </button>
      </div>
    </>
  );
};

export default BdayCard;
