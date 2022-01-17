import React from "react";
import cx from "classnames";
import styles from "./mobile-case.module.scss";

export const MobileCase = (props: any) => {
  return <div className={cx(styles.wrapper)}>{props.children}</div>;
};
