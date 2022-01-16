import React from "react";
import cx from "classnames";
import styles from "./control-buttons.module.scss";

export const ControlButtons = (): JSX.Element => {
  return (
    <div className={cx(styles.root)}>
      <div className={cx(styles["control-button-latch"])}></div>
      <button className={cx(styles["control-button-up"])}></button>
      <button className={cx(styles["control-button-down"])}></button>
    </div>
  );
};
