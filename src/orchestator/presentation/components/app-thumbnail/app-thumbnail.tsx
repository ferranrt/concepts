import React from "react";
import cx from "classnames";
import styles from "./app-thumbnail.module.scss";

interface AppThumbnailProps {
  label: string;
  icon: any;
  path: string;
}

export const AppThumbnail = (props: AppThumbnailProps): JSX.Element => {
  const { icon, label, path } = props;
  return (
    <button className={cx(styles.wrapper)}>
      <img className={styles.img} src={icon} alt={label} />
      <span className={cx(styles.label)}>{label}</span>
    </button>
  );
};
