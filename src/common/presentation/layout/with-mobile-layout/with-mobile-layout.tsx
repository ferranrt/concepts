import { MobileMock } from "@commonUI/components/mobile-mock/mobile-mock";
import React from "react";

import styles from "./with-mobile-layout.module.scss";
interface WithMobileLayoutProps {
  children: any;
}

export const WithMobileLayout = (props: WithMobileLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={styles.root}>
      <MobileMock>{children}</MobileMock>
    </div>
  );
};
