import Form from "../../components/Form";
import { Helmet } from "react-helmet";
import styles from "./FormPage.module.css";

export default function FormPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Форма з даними" />
        <title>Aqualite - Ваші дані</title>
        <meta
          name="keywords"
          content="water, form, data, user, name, phone number, вода, форма, дані, користувач, ім'я, номер телефону, aqualite, аквалайт"
        ></meta>
      </Helmet>
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
