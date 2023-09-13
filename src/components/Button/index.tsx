import { ButtonInterface } from "../../typings";
import { useLocation, Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({ width, height }: ButtonInterface) {
  const location = useLocation();

  return location.pathname === "/order" || location.pathname === "/cart" ? (
    <Link
      to="/form"
      className={`${styles.button}`}
      style={{
        width,
        height,
        maxWidth: width,
      }}
    >
      Замовити
    </Link>
  ) : (
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
