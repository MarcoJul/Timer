import { useState, useEffect, Fragment, useRef } from "react";

import { ReactComponent as SettingsSvg } from "../assets/gear.svg";
import { ReactComponent as CheckSvg } from "../assets/check.svg";
import classes from "./Timer.module.css";

const CountDown = () => {
  const [started, setStarted] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [isEdit, setIsEdit] = useState(false);
  const secondsInput = useRef();
  const minutesInput = useRef();

  const toggleHandler = () => {
    setStarted(() => !started);
  };

  useEffect(() => {
    let interval = null;
    if (started) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        if (seconds === 0) {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        }
        if (seconds === 0 && minutes === 0) {
          alert("time is up!");
          setStarted(false);
          setMinutes(minutesInput.current.value);
          setSeconds(secondsInput.current.value);
          clearInterval(interval);
        }
      }, 1000);
    } else if (!started && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [started, minutes, seconds]);

  const editHandler = () => {
    setStarted(false);
    setIsEdit(true);
  };

  const checkHandler = () => {
    setIsEdit(false);
    setMinutes(minutesInput.current.value);
    setSeconds(secondsInput.current.value);
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
            {isEdit ? (
              <form onSubmit={checkHandler}>
                <input
                  type="text"
                  maxLength="2"
                  className={`${classes.time} ${classes.minutes}`}
                  ref={minutesInput}
                  placeholder="00"
                />
                <span className={classes.separator}>:</span>
                <input
                  type="text"
                  className={classes.time}
                  maxLength="2"
                  ref={secondsInput}
                  placeholder="00"
                />
              </form>
            ) : (
              <Fragment>
                <p className={`${classes.time} ${classes.minutes}`}>
                  {minutes.toString().padStart(2, 0)}
                </p>
                <span className={classes.separator}> :</span>
                <p className={`${classes.time} ${classes.seconds}`}>
                  {seconds.toString().padStart(2, 0)}
                </p>
              </Fragment>
            )}
          </div>
          <button className={classes.button} onClick={toggleHandler}>
            {started ? "stop" : "start"}
          </button>
          <button
            className={classes.settings}
            onClick={isEdit ? checkHandler : editHandler}
          >
            {isEdit ? <CheckSvg /> : <SettingsSvg />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
