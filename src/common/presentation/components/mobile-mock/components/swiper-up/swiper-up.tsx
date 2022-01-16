import React from "react";
import styles from "./swiper-up.module.scss";

export const SwiperUp = (): JSX.Element => {
  return (
    <div className={styles["swiper"]}>
      <button className={styles["swiper-pill"]} />
    </div>
  );
};
