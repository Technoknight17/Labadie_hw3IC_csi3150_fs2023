import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // State to keep track of the current count
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter">
        <h2>{count}</h2>
        <div className="button-container">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
