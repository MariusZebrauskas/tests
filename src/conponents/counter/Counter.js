import React, { useState } from 'react';
import './counterStyles.css';
const buttonStyles = {
  padding: '.3rem .5rem',
  margin: '1rem',
};

const flexMidle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Counter = () => {
  const [adjustNr, setAddjustNr] = useState(1);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult((prev) => prev + adjustNr);
  };
  const minus = () => {
    setResult((prev) => prev - adjustNr);
  };

  const onChange = (e) => {
    setAddjustNr(Number(e.target.value));
  };
  return (
    <div>
      <h1 data-testid='counter' style={flexMidle}>
        Counter
      </h1>
      <button onClick={add} style={buttonStyles}>
        +
      </button>
      <input data-testid='inputEl' type='number' value={adjustNr} onChange={onChange} />
      <button onClick={minus} style={buttonStyles}>
        -
      </button>

      <div>
        <h2 className={result >= 10 ? "blue" : result < 0 ? "red" : ""} data-testid='counterValue' style={flexMidle}>
          total value: {result}
        </h2>
      </div>
    </div>
  );
};

export default Counter;
