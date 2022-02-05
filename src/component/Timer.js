import { ReactComponent as SettingsSvg } from "../assets/gear.svg";
import classes from "./Timer.module.css";
import "../index.css";

const Timer = () => {
  return (
    <div className={classes.outerBox}>
      <div className={classes.innerBox}>
        <div className={classes.actions}>
          <p className={classes.time}>15:00</p>
          <div className={classes.button}>
            <p className={classes.text}>start</p>
          </div>
          <div className={classes.settings}>
            <SettingsSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
