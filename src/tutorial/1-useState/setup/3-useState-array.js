import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const remItem = (id) => {
    let item = people.filter((person) => person.id !== id);
    setPeople(item);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                remItem(id);
              }}
            >
              Remove item
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Click here to remove items
      </button>
    </>
  );
};

export default UseStateArray;
