import TransparentButton from "../../components/TransparentButton";
import { PathConstants } from "../../router/PageRoutes";
import styles from "./FeedBack.module.css";

export default function FeedbackPage() {
  return (
    <section className={styles.success}>
      <div className={styles.container}>
        <h3 className={styles["success__header"]}>Ваше замовлення прийнято!</h3>
        <p className={styles["success__text"]}>
          Найближчим часом ми зв’яжемося з Вами для його підтвердження.
        </p>
        <TransparentButton reference={PathConstants.FAST_ORDER}>
          Замовити ще
        </TransparentButton>
      </div>
    </section>
  );
}
