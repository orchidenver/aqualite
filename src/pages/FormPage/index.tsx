import Form from "../../components/Form";
import styles from "./FormPage.module.css";

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
