import { useToMobile } from "@core/hooks/useToMobile";
import { MobileMock } from "@orchestator/presentation/components/phone-mock/mobile-mock";
import React from "react";

import styles from "./base-layout.module.scss";
interface BaseLayoutProps {
  children: any;
}

export const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { children } = props;

  const mobile = useToMobile();

  if (mobile) {
    return <main className={styles.content}>{children}</main>;
  }
  return (
    <div className={styles.root}>
      <MobileMock>{children}</MobileMock>
    </div>
  );
};
