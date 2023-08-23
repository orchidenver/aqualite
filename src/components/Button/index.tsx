import styles from "./Button.module.css";

import * as React from "react";

export interface IAppProps {}

export default function Button(props: IAppProps) {
  return <button className={`${styles.button}`}>Замовити</button>;
}
