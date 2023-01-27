import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/Button";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import HeadLine from "./components/HeadLine";

const App = () => {
  const [Counter1, setCouter1] = useState(0);
  const [Counter2, setCouter2] = useState(0);

  const handleCouter1 = useCallback(() => {
    setCouter1((prevCouter) => prevCouter + 1);
  }, []);

  const handleCouter2 = useCallback(() => {
    setCouter2((prevCouter) => prevCouter + 2);
  }, []);

  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return Counter1 % 2 === 0;
  }, [Counter1]);

  return (
    <div className="app">
      <HeadLine />
      {isEven ? " Even" : "Odd"}
      <CounterOne count={Counter1} />
      <Button handleClick={handleCouter1}>Increment By 1</Button>
      <CounterTwo count={Counter2} />
      <Button handleClick={handleCouter2}>Increment By 2</Button>
    </div>
  );
};

export default App;
