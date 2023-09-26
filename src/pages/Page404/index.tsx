import { Helmet } from "react-helmet";
import styles from "./Page404.module.css";
import img from "../../assets/4041920.webp";

export default function Page404() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Сторінка не знайдена" />
        <title>Aqualite - Сторінка не знайдена</title>
        <meta
          name="keywords"
          content="water, error, 404, aqualite, аквалайт, вода, помилка"
        ></meta>
      </Helmet>
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
    </>
  );
}
