import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./TransparentButton.module.css";

export interface TransparentButtonInterface {
  reference: string;
  children: string;
  width?: string;
  margin?: string;
}

export default function TransparentButton({
  reference,
  children,
  width,
  margin,
}: TransparentButtonInterface) {
  return (
    <Link
      to={reference}
      className={styles["transparent__btn"]}
      style={{
        width,
        margin,
      }}
    >
      {children}
    </Link>
  );
}
