import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => (count !== 0 ? setCount(count - 1) : null)}>
        -
      </button>
      <h6>Count is {count}</h6>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
