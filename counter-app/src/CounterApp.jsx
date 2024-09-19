import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter((current) => current + 1);
  };

  const handleSubs = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <div className="counter-wrapper">
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button aria-label="button-substract" onClick={handleSubs}>
        -1
      </button>
      <button aria-label="button-reset" onClick={handleReset}>
        Reset
      </button>
      <button aria-label="button-add" onClick={handleAdd}>
        +1
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
