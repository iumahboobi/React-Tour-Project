import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);

  useEffect(() => {
    if (value > 4) {
      document.title = `New Message ${value}`;
    }
  }, [value]);

  return (
    <div>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button
        className="btn"
        onClick={() => {
          setvalue(value + 1);
        }}
      >
        Click to change value
      </button>
    </div>
  );
};

export default UseEffectBasics;
