import Form from "../../components/Form";
import Footer from "../../components/Footer";
import styles from "./FormPage.module.css";
import { Link } from "react-router-dom";
import { PathConstants } from "../../router/PageRoutes";

export default function FormPage() {
  return (
    <>
      {/* <section className={styles["user-data"]}>
        <div className={styles.container}>
          <h3 className={styles["user-data__title"]}>
            вкажіть інформацію для доставки
          </h3>
          <Form />
        </div>
      </section> */}
      <section className={styles.success}>
        <div className={styles.container}>
          <h3 className={styles["success__header"]}>
            Ваше замовлення прийнято!
          </h3>
          <p className={styles["success__text"]}>
            Найближчим часом ми зв’яжемося з Вами для його підтвердження.
          </p>
          <Link
            to={PathConstants.FAST_ORDER}
            className={styles["success__btn"]}
          >
            Замовити ще
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
