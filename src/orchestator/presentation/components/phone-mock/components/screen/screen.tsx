import React from "react";
import cx from "classnames";
import styles from "./screen.module.scss";

export const Screen = (props: any): JSX.Element => {
  const { children } = props;
  return <div className={styles["screen"]}>{children}</div>;
};
