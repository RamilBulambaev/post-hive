import { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button className={classes.btn} onClick={increment}>
        increment
      </button>
      <button className={classes.btn} onClick={decrement}>
        decrement
      </button>
    </div>
  );
}
