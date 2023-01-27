import React from "react";

const CounterTwo = ({ count }) => {
  console.log("Counter Two Render...");
  return (
    <div>
      <h3>CounterTwo - {count}</h3>
    </div>
  );
};

export default React.memo(CounterTwo);
