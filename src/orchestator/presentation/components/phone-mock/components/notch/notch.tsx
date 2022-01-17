import React from "react";
import Link from "next/link";
import { IoIosContact, IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import styles from "./notch.module.scss";

export const Notch = (): JSX.Element => {
  return (
    <div className={styles.notch}>
      <div className={styles["left"]}>
        <Link passHref href="/">
          <span className={styles["home"]}>
            <IoIosContact />
            Author
          </span>
        </Link>
      </div>
      <div className={styles.center}>
        <span className={styles["mic"]} />
        <span className={styles["speaker"]} />
      </div>
      <div className={styles.right}>
        <div className={styles.tools}>
          <IoIosWifi />
          <IoIosBatteryFull />
        </div>
      </div>
    </div>
  );
};
