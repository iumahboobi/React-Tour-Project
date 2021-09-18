import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    fullName: "Connor",
    age: 24,
    message: "Please Click the message",
  });

  const changeMessage = () => {
    if (person.message == "Please Click the message" || person.age == 24) {
      setPerson({
        ...person,
        message: "T100 is following me please help me!!!",
        age: 26,
      });
    } else {
      setPerson({ ...person, message: "Please Click the message", age: 24 });
    }
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.fullName}</h3>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        Click here to vie the Message
      </button>
    </>
  );
};

export default UseStateObject;
