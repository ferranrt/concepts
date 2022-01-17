import React from "react";
import styles from "./content.module.scss";

export const Content = (props: any): JSX.Element => {
  const { children } = props;
  return <div className={styles.wrapper}>{children}</div>;
};
