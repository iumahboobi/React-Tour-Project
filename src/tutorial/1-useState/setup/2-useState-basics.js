import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Click Me");

  const changeTheText = () => {
    if (text === "Click Me") {
      setText("Hello World");
    } else {
      setText("Click Me");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={changeTheText}>
        Click the button to change the Heading
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
