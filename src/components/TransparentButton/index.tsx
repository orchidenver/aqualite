import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./TransparentButton.module.css";

export interface TransparentButtonInterface {
  reference: string;
  children: string;
  width?: string;
  margin?: string;
  color?: string;
}

export default function TransparentButton({
  reference,
  children,
  width,
  margin,
  color,
}: TransparentButtonInterface) {
  return (
    <Link
      to={reference}
      className={styles["transparent__btn"]}
      style={{
        width,
        margin,
        color,
      }}
    >
      {children}
    </Link>
  );
}
