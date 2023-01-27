import React from "react";

const CounterOne = ({ count }) => {
  console.log("Couter One Render...");
  return (
    <div>
      <h3>CounterOne - {count}</h3>
    </div>
  );
};

export default React.memo(CounterOne);
