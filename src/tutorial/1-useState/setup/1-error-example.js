import React from "react";

const ErrorExample = () => {
  let title = "Use Case";

  const changeTitle = () => {
    title = "Hello World";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={changeTitle}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
