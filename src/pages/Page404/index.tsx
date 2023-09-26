import { Helmet } from "react-helmet";
import styles from "./Page404.module.css";
import imgBig from "../../assets/4041920.webp";
import imgMedium from "../../assets/4041280.webp";
import imgSmall from "../../assets/404800.webp";

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
        <picture>
          <source media="(max-width: 800px)" srcSet={imgSmall} />
          <source media="(max-width: 1280px)" srcSet={imgMedium} />
          <source media="(max-width: 1920px)" srcSet={imgBig} />
          <img
            loading="lazy"
            src={imgMedium}
            alt="error"
            className={styles["error-page__img"]}
          />
        </picture>

        <h2 className={styles["error-page__title"]}>404</h2>
        <p className={styles["error-page__text"]}>Щось пішло нетак</p>
      </section>
    </>
  );
}
