import React from "react";
import styles from "./mobile-mock.module.scss";
import { useToMobile } from "@shared/hooks/useToMobile";
import cx from "classnames";
import { SwiperUp } from "./components/swiper-up/swiper-up";
import { Notch } from "./components/notch/notch";
import { ControlButtons } from "./components/control-buttons/control-buttons";
import { HomeBar } from "./components/home-bar/home-bar";

interface MobileMockProps {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}

export const MobileMock = (props: MobileMockProps): JSX.Element => {
  const { children } = props;
  const mobile = useToMobile();
  if (mobile) {
    return <main className={styles.content}>{children}</main>;
  }
  return (
    <div className={styles.root}>
      <ControlButtons />
      <div className={cx(styles["screen"])}>
        <Notch />

        <main className={styles.content}>{children}</main>
        {/* <HomeBar /> */}
        <SwiperUp />
      </div>
    </div>
  );
};
