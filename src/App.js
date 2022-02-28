import { useState } from "react";

import Timer from "./component/Timer";

import classes from "./App.module.css";
import CountDown from "./component/CountDown";

function App() {
  const [timer, setTimer] = useState(false);

  const toggleUse = () => {
    setTimer(() => !timer);
  };

  const swipeMessage = (message, icon) => {
    const html = (
      <div className={classes.swipe}>
        <p>{message}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={icon}
          />
        </svg>
      </div>
    );
    return html;
  };

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={toggleUse}>
        {!timer
          ? swipeMessage(
              "countdown",
              "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            )
          : swipeMessage(
              "timer",
              "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            )}
      </button>
      <div className={`${classes.content} ${timer ? classes.transformed : ""}`}>
        <div className={classes.timer}>
          <Timer />
        </div>
        <div className={classes.countdown}>
          <CountDown />
        </div>
      </div>
    </div>
  );
}

export default App;
