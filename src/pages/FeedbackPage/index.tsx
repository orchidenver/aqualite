import TransparentButton from "../../components/TransparentButton";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { PathConstants } from "../../router/PageRoutes";
import { Helmet } from "react-helmet";
import styles from "./FeedBack.module.css";

export default function FeedbackPage() {
  const mobileSize = useMediaQuery("(max-width: 800px)");
  console.log(history.state);

  return (
    <>
      <Helmet>
        <meta name="description" content="Статус замовлення" />
        <title>Aqualite - Статус замовлення</title>
        <meta
          name="keywords"
          content="water, feedback, вода, повідомлення, статус, aqualite, аквалайт"
        ></meta>
      </Helmet>
      <section className={styles.success}>
        <div className={styles.container}>
          <h3 className={styles["success__header"]}>
            Ваше замовлення прийнято!
          </h3>
          <p className={styles["success__text"]}>
            Найближчим часом ми зв’яжемося з Вами для його підтвердження.
          </p>
          <TransparentButton reference="/">На головну</TransparentButton>
          <TransparentButton
            reference={
              mobileSize ? PathConstants.FAST_ORDER : `/${PathConstants.FORM}`
            }
          >
            Швидке замовлення
          </TransparentButton>
        </div>
      </section>
    </>
  );
}
