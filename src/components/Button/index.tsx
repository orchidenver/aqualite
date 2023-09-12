import styles from "./Button.module.css";

import * as React from "react";

export interface ButtonInterface {
  width?: string;
  height?: string;
}

export default function Button({ width, height }: ButtonInterface) {
  return (
    <button
      className={`${styles.button}`}
      style={{
        width,
        height,
        maxWidth: width,
      }}
    >
      Замовити
    </button>
  );
}
