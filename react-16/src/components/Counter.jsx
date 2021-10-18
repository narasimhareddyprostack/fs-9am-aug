import React, { useState } from "react";
let Counter = () => {
  let [counter, kgf] = useState(1);
  let updateCounterHanlder = () => {
    kgf(counter + 1);
  };
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={updateCounterHanlder}>Counter</button>
    </>
  );
};
export default Counter;
