import { ComponentProps, useState } from "react";

interface props extends ComponentProps<"div"> {
  value: number;
}

export const Counter = ({ value }: props) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter((value) => value + 1);
  };

  const handleMin = () => {
    setCounter((value) => {
      if (value > 0) {
        return value - 1;
      }

      return value;
    });
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMin}>-1</button>
    </>
  );
};
