import TransparentButton from "../../components/TransparentButton";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { PathConstants } from "../../router/PageRoutes";
import styles from "./FeedBack.module.css";

export default function FeedbackPage() {
  const mobileSize = useMediaQuery("(max-width: 800px)");

  return (
    <section className={styles.success}>
      <div className={styles.container}>
        <h3 className={styles["success__header"]}>Ваше замовлення прийнято!</h3>
        <p className={styles["success__text"]}>
          Найближчим часом ми зв’яжемося з Вами для його підтвердження.
        </p>
        <TransparentButton
          reference={mobileSize ? PathConstants.FAST_ORDER : "/#shop"}
        >
          Замовити ще
        </TransparentButton>
      </div>
    </section>
  );
}
