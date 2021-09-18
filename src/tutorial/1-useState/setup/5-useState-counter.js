import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setvalue] = useState(0);

  const complexCounter = () => {
    setTimeout(() => {
      setvalue((prev) => {
        return prev + 1;
      });
    }, 600);
  };

  return (
    <>
      <h2>Simple Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setvalue(value + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setvalue(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setvalue(value - 1)}>
        Decrease
      </button>

      <h2 style={{ margin: "4rem 0" }}>Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexCounter}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
