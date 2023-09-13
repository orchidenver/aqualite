import styles from "./Preloader.module.css";
import logo from "../../assets/logo-white.svg";

export default function Preloader() {
  return (
    <aside className={styles.preloader}>
      <img
        src={logo}
        alt="logo loading site"
        className={styles["preloader__img"]}
      />
    </aside>
  );
}
