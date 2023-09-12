import Form from "../../components/Form";
import TransparentButton from "../../components/TransparentButton";
import styles from "./FormPage.module.css";
import { PathConstants } from "../../router/PageRoutes";

export default function FormPage() {
  return (
    <>
      <section className={styles["user-data"]}>
        <div className={styles.container}>
          <h3 className={styles["user-data__title"]}>
            вкажіть інформацію для доставки
          </h3>
          <Form />
        </div>
      </section>
    </>
  );
}
