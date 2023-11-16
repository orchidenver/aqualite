import { TransparentButtonInterface } from "../../typings";
import { Link } from "react-router-dom";
import styles from "./TransparentButton.module.css";

export default function TransparentButton({
  reference,
  children,
  width,
  margin,
  color,
  fontSize,
}: TransparentButtonInterface) {
  return (
    <Link
      to={reference}
      className={styles["transparent__btn"]}
      style={{
        width,
        margin,
        color,
        fontSize,
      }}
    >
      {children}
    </Link>
  );
}
