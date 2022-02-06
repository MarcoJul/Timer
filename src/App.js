import { useState } from "react";

import Timer from "./component/Timer";

import classes from "./App.module.css";
import CountDown from "./component/CountDown";

function App() {
  const [timer, setTimer] = useState(false);

  const toggleUse = () => {
    setTimer(() => !timer);
  };

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={toggleUse}>
        {!timer ? "countdown ->" : "<- timer"}
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
