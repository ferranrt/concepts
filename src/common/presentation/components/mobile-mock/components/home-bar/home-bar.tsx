import React from "react";
import cx from "classnames";
import styles from "./home-bar.module.scss";
import { IoIosSquareOutline } from "react-icons/io";

export const HomeBar = (): JSX.Element => {
  return (
    <div className={cx(styles["home-container"])}>
      <div className={cx(styles["home-button"])}>
        <IoIosSquareOutline />
      </div>
    </div>
  );
};
