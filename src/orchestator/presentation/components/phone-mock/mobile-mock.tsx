import React from "react";
import styles from "./mobile-mock.module.scss";
import { useToMobile } from "src/core/hooks/useToMobile";
import { ControlButtons } from "./components";
import { MobileCase } from "./components";
import { Screen } from "./components";
import { Notch } from "./components";
import { SwiperUp } from "./components";
import { Content } from "./components";

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

  return (
    <div className={styles.root}>
      <ControlButtons />
      <MobileCase>
        <Screen>
          <Notch />
          <Content>{children}</Content>
          <SwiperUp />
        </Screen>
      </MobileCase>
    </div>
  );
};
