import styles from "./Page404.module.css";
import img from "../../assets/404.svg";

export default function Page404() {
  return (
    <section className={styles["error-page"]}>
      <img
        loading="lazy"
        src={img}
        alt="error"
        className={styles["error-page__img"]}
      />
      <h2 className={styles["error-page__title"]}>404</h2>
      <p className={styles["error-page__text"]}>Щось пішло нетак</p>
    </section>
  );
}
