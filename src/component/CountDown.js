import { useState, useEffect } from "react";

import { ReactComponent as SettingsSvg } from "../assets/gear.svg";
import classes from "./Timer.module.css";
import "../index.css";

const CountDown = () => {
  const [started, setStarted] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const toggleHandler = () => {
    setStarted(() => !started);
  };

  useEffect(() => {
    let interval = null;
    if (started) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinutes((minutes) => minutes + 1);
        }
      }, 1000);
    } else if (!started && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [started, seconds]);

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setStarted(false);
  };

  return (
    <div
      className={`${classes.outerBox} ${
        !started ? classes.started : classes.stopped
      }`}
    >
      <div className={classes.innerBox}>
        <div className={classes.actions}>
          <div>
            <p className={`${classes.time} ${classes.minutes}`}>
              {minutes.toString().padStart(2, 0)}
            </p>
            <span className={classes.separator}> :</span>
            <p className={`${classes.time} ${classes.seconds}`}>
              {seconds.toString().padStart(2, 0)}
            </p>
          </div>
          <button className={classes.button} onClick={toggleHandler}>
            {started ? "stop" : "start"}
          </button>
          <button className={classes.settings}>
            <SettingsSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
